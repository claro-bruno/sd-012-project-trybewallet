import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrency, expenseAdd } from '../actions';

class FormWallet extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currenc: 'USD',
      method: 'Cartão de crédito',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { addExp } = this.props;
    const { id } = this.state;
    const obj = { ...this.state };
    addExp(obj);
    this.setState({
      id: id + 1,
    });
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currenc, method, tag } = this.state;
    const categorias = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input
            type="number"
            name="value"
            value={ value }
            onChange={ this.handleChange }
            id="valor"
          />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input
            type="text"
            name="description"
            value={ description }
            onChange={ this.handleChange }
            id="descricao"
          />
        </label>
        <label htmlFor="c">
          Moeda
          <select id="c" name="currenc" value={ currenc } onChange={ this.handleChange }>
            { currencies.map((e, i) => <option value={ e } key={ i }>{ e }</option>) }
          </select>
        </label>
        <label htmlFor="pag">
          Método de pagamento
          <select id="pag" name="method" value={ method } onChange={ this.handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de Crédito" defaultValue>Cartão de Crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag" value={ tag } onChange={ this.handleChange }>
            { categorias.map((e) => <option value={ e } key={ e }>{ e }</option>) }
          </select>
        </label>
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrency()),
  addExp: (obj) => dispatch(expenseAdd(obj)),
});

FormWallet.propTypes = {
  fetchCurrencies: PropTypes.func.isRequired,
  addExp: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormWallet);
