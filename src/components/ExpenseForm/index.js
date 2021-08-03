import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchApi } from '../../actions';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      id: 0,
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };
  }

  componentDidMount() {
    const { newExpense } = this.props;
    newExpense();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { newExpense, expenses } = this.props;
    const expensesLength = expenses.length;

    newExpense(this.state);

    if (expensesLength >= 0) {
      this.setState({ id: expensesLength + 1 });
    }
  }

  render() {
    const { currencies } = this.props;

    return (
      <form>
        <label htmlFor="val">
          Valor
          <input type="text" id="val" name="value" onChange={ this.handleChange } />
        </label>
        <label htmlFor="des">
          Descrição
          <input type="text" id="des" name="description" onChange={ this.handleChange } />
        </label>
        <label htmlFor="cur">
          Moeda
          <select id="cur" name="currency" onChange={ this.handleChange }>
            {currencies.map((currency) => (
              <option key={ currency } value={ currency }>{ currency }</option>
            ))}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select id="payment" name="method" onChange={ this.handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag" onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  newExpense: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  newExpense: (expense) => dispatch(fetchApi(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
