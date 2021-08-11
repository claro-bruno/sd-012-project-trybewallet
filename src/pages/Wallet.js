import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { fetchAPI as fetchAPICreator } from '../actions';
import Form from '../components/Form';

class Wallet extends React.Component {
  constructor() {
    super();

    this.renderTableBody = this.renderTableBody.bind(this);
  }

  componentDidMount() {
    const { fetchAPI } = this.props;
    fetchAPI();
  }

  // sumTotalExpenses() {
  //   const { expenses } = this.props;
  //   const expensesSum = Math.round(expenses.reduce((accumulator, expense) => {
  //     const { value, currency, exchangeRates } = expense;
  //     const { ask } = exchangeRates[currency];
  //     return accumulator + parseFloat(value) * parseFloat(ask);
  //   }, 0) * 100) / 100;
  //   return expensesSum;
  // }

  renderTableBody() {
    const { expenses } = this.props;
    expenses.map((expense, index) => {
      const { id, description, method, currency, value, exchangeRates } = expense;
      const { name, ask } = exchangeRates[currency];
      // const expensesArray = [id, description, method, value, exchangeRates, name, ask];
      return (
        <td key={ index }>{ description }</td>
        // expensesArray.map((item, index1) => (<td key={ index1 }>{ id }</td>))
      );
    });
  }

  render() {
    const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const expenseCategories = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const tableHeaderOptions = ['Descrição', 'Tag', 'Método de pagamento', 'Valor',
      'Moeda', 'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão',
      'Editar/Excluir'];
    const { email, data, expenses } = this.props;
    console.log(expenses);
    return (
      <>
        <Header
          dataTestIdEmail="email-field"
          email={ email }
          dataTestIdAmount="total-field"
          amountOfExpensesLabel="Despesa Total: "
          // ? Como inserir a lógica de um método e chamar na prop amountOfExpenses
          // ? como comentado na linha 20?
          amountOfExpenses={
            Math.round(expenses.reduce((accumulator, expense) => {
              const { value, currency, exchangeRates } = expense;
              const { ask } = exchangeRates[currency];
              return accumulator + parseFloat(value) * parseFloat(ask);
            }, 0) * 100) / 100
          }
          dataTestIdCurrencyField="header-currency-field"
          currentExchange="BRL"
        />
        <Form
          array={ data }
          paymentMethodsArray={ paymentMethods }
          expenseCategories={ expenseCategories }
        />
        <table>
          <thead>
            <tr>
              { tableHeaderOptions.map((tableOption, index) => (
                <th key={ index }>{tableOption}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              { this.renderTableBody() }
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

Wallet.propTypes = {
  fetchAPI: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    description: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    exchangeRates: PropTypes.objectOf(
      PropTypes.objectOf(PropTypes.string),
    ),
  })).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  data: state.exchange.data,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: () => dispatch(fetchAPICreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
