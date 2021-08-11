import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { fetchAPI as fetchAPICreator } from '../actions';
import Form from '../components/Form';
import TableRow from '../components/TableRow';

class Wallet extends React.Component {
  constructor() {
    super();

    this.getInfo = this.getInfo.bind(this);
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

  getInfo(item) {
    const { id, description, method, tag, currency, value, exchangeRates } = item;
    const { name, ask } = exchangeRates[currency];
    const info = [description, tag, method, (Math.round(value * 100) / 100),
      name, (Math.round(ask * 100) / 100).toFixed(2),
      (Math.round((ask * value) * 100) / 100).toFixed(2), 'Real',
      <button
        data-testid="delete-btn"
        type="button"
        key={ id }
      >
        Excluir
      </button>,
      <button
        data-testid="edit-btn"
        type="button"
        key={ id }
      >
        Editar
      </button>,
    ];
    return info;
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
            { expenses.length > 0 && expenses.map((item, index) => (<TableRow
              key={ index }
              content={ this.getInfo(item) }
            />))}
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
