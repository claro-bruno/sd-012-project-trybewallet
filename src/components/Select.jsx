import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes, { string } from 'prop-types';
import { fetchAPI, fetchCurrenc } from '../actions/index';

const arrays = {
  type: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
  tag: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
};

class Select extends Component {
  constructor() {
    super();
    this.state = ({
      id: 0,
      value: '0',
      description: 'NDA',
      currency: 'USD',
      method: 'Dinhero',
      tag: 'Alimentação',
    });

    this.save = this.save.bind(this);
    this.hadleInput = this.hadleInput.bind(this);
  }

  componentDidMount() {
    const { coins } = this.props;
    coins();
  }

  hadleInput({ target: { id, value } }) {
    this.setState({
      [id]: value,
    });
  }

  save() {
    const { addToList } = this.props;
    const { id } = this.state;
    const obj = { ...this.state };
    addToList(obj);
    this.setState({
      id: id + 1,
    });
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            id="value"
            type="number"
            onChange={ this.hadleInput }
            value={ value }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            id="description"
            type="text"
            onChange={ this.hadleInput }
            value={ description }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency" onChange={ this.hadleInput } value={ currency }>
            { currencies.map((elm) => <option key={ elm }>{ elm }</option>)}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select id="method" onChange={ this.hadleInput } value={ method }>
            { arrays.type.map((elm) => <option key={ elm }>{elm}</option>) }
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" onChange={ this.hadleInput } value={ tag }>
            { arrays.tag.map((elm) => <option key={ elm }>{elm}</option>)}
          </select>
        </label>
        <button onClick={ this.save } type="button">Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  coins: () => dispatch(fetchAPI()),
  addToList: (value) => dispatch(fetchCurrenc(value)),
});

Select.propTypes = {
  coins: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(string).isRequired,
  addToList: PropTypes.func.isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(Select);
