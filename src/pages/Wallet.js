import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { fetchAPI as fetchAPICreator } from '../actions';
import Form from '../components/Form';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchAPI } = this.props;
    fetchAPI();
  }

  render() {
    const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const expenseCategories = [
      'Alimentação',
      'Lazer',
      'Trabalho',
      'Transporte',
      'Saúde',
    ];
    const tableHeaderOptions = ['Descrição', 'Tag', 'Método de pagamento', 'Valor',
      'Moeda', 'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão',
      'Editar/Excluir'];
    const { email, data } = this.props;

    return (
      <>
        <Header
          dataTestIdEmail="email-field"
          email={ email }
          dataTestIdAmount="total-field"
          amountOfExpensesLabel="Despesa Total: "
          amountOfExpenses="0"
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
        </table>
      </>
    );
  }
}

Wallet.propTypes = {
  fetchAPI: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  data: state.exchange.data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: () => dispatch(fetchAPICreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
