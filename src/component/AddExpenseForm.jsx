import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchAPI from '../helpers/fetchApi';
import { saveExpense, getCurrency } from '../actions';

class AddExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.rates = this.rates.bind(this);

    this.state = {
      id: -1,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
  }

  componentDidMount() {
    const { currency } = this.props;
    fetchAPI(currency);
  }

  rates(data) {
    const { saveExp } = this.props;
    this.setState(({ id }) => ({
      exchangeRates: data,
      id: id + 1,
    }), () => saveExp(this.state));
  }

  handleClick() {
    fetchAPI(this.rates);
  }

  handleChange({ target }) {
    const { name } = target;
    const { value } = target;
    this.setState({
      [name]: value.replace(',', '.'),
    });
  }

  value() {
    const { value } = this.state;
    return (
      <label htmlFor="valor">
        Valor:
        <input
          id="valor"
          type="text"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  description() {
    const { description } = this.state;
    return (
      <label htmlFor="descricao">
        Descrição:
        <input
          id="descricao"
          type="text"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  render() {
    const { currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        {this.value()}
        <label htmlFor="moeda">
          Moeda:
          <select
            name="currency"
            id="moeda"
            value={ currency }
            onChange={ this.handleChange }
          >
            {currencies.map((curr, index) => (
              <option key={ index }>
                { curr.code }
              </option>))}
          </select>
        </label>
        <label htmlFor="método de pagamento">
          Método de Pagamento:
          <select
            name="method"
            id="método de pagamento"
            value={ method }
            onChange={ this.handleChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select name="tag" id="tag" value={ tag } onChange={ this.handleChange }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        {this.description()}
        <button type="button" onClick={ this.handleClick }>Adicionar Despesa</button>
      </form>
    );
  }
}

AddExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  saveExp: (expense) => dispatch(saveExpense(expense)),
  currency: (data) => dispatch(getCurrency(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenseForm);
