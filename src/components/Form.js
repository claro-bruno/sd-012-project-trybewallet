import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpensive, saveExpensive } from '../actions';

class OutGoing extends Component {
  constructor(props) {
    super(props);
    const {currenciesProps} = this.props;
    this.state = {
      id: 0,
      value: '',
      currency: [],
      description: '',
      method: 'Dinheiro',
      tag: 'alimentacao',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCurrencies = this.handleCurrencies.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleExpenses= this.handleExpenses.bind(this);
    this.inputDescricao = this.inputDescricao.bind(this);
    this.inputValue = this.inputValue.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleCurrencies() {
    const { currenciesProps } = this.props;
    const cur = [...Object.keys(currenciesProps).filter(moeda => moeda !== 'USDT')];

    return cur.map((moeda) => (
      <option key={ moeda } value={ moeda }>
        {moeda}
      </option>));
  }

  handleExpenses() {
    
  }
  
  inputDescricao(onChange) {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição:
        <input
          type="text"
          id="description"
          name="description"
          value={ description }
          onChange={ onChange }
          />
      </label>
    );
  }
  
  inputValue(onChange) {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor:
        <input
          type="text"
          id="value"
          name="value"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }

  async handleOnSubmit(e) {
    e.preventDefault();
    const { addExpensive, currenciesProps } = this.props;
    await this.setState({ exchangeRates: {currenciesProps}})
    addExpensive(this.state);
    
  }

  render() { // FUNCAP RENDER
    const { tag, method, currency } = this.state;
    return (
      <form onSubmit={ (e) => this.handleOnSubmit(e) }>
        {this.inputValue(this.handleChange)}
        {this.inputDescricao(this.handleChange)}
        <label htmlFor="currency">
          Moeda:
          <select
            id="currency"
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            {this.handleCurrencies()}
          </select>
        </label>
        <label htmlFor="method">
          método de pagamento:
          <select
            id="method"
            name="method"
            value={ method }
            onChange={ this.handleChange }
          >
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de Débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          tag:
          <select
            id="tag"
            name="tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="trasporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
        <button type="submit">adicionar despesa</button>
      </form>
    );
  }
}

OutGoing.propTypes = {
  currenciesProps: PropTypes.arrayOf(PropTypes.string).isRequired,
  addExpensive: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currenciesProps: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  addExpensive: (state) => dispatch(addExpensive(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OutGoing);
