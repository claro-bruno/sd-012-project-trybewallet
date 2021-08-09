import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { fetchAPI as fetchAPICreator } from '../actions';
// import Input from '../components/Input';
// import Select from '../components/Select';
import Form from '../components/Form';

class Wallet extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     expenseValue: '',
  //     expenseDescription: '',
  //     currentExchange: '',
  //     paymentMethod: '',
  //     expenseCategory: '',
  //   };

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  componentDidMount() {
    const { fetchAPI } = this.props;
    fetchAPI();
  }

  // handleChange({ target }) {
  //   const { name, value } = target;
  //   this.setState({ [name]: value });
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  // }

  render() {
    const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const expenseCategories = [
      'Alimentação',
      'Lazer',
      'Trabalho',
      'Transporte',
      'Saúde',
    ];
    const { email, data } = this.props;
    // const {
    //   expenseValue,
    //   expenseDescription,
    //   currentExchange,
    //   paymentMethod,
    //   expenseCategory,
    // } = this.state;

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
          paymentMethod={ paymentMethod }
          paymentMethodsArray={ paymentMethods }
          expenseCategory={ expenseCategory }
          expenseCategories={ expenseCategories }
        />
        <div>
          Preciso adicionar aqui as despesas
        </div>
      </>
    );
  }
}

{/* <form onSubmit={ this.handleSubmit }>
          <Input
            name="expenseValue"
            label="Valor: "
            type="number"
            testId="expenseValue"
            value={ expenseValue }
            onChange={ this.handleChange }
          />
          <Input
            name="expenseDescription"
            label="Descrição: "
            type="text"
            testId="expenseDescription"
            value={ expenseDescription }
            onChange={ this.handleChange }
          />
          <Select
            name="current-exchange"
            label="Moeda: "
            id="current-exchange"
            value={ currentExchange }
            onChange={ this.handleChange }
            array={ data }
          />
          <Select
            name="payment-options"
            label="Método de pagamento: "
            id="payment-options"
            value={ paymentMethod }
            onChange={ this.handleChange }
            array={ paymentMethods }
          />
          <Select
            name="expense-categories"
            label="Tag: "
            id="expense-categories"
            value={ expenseCategory }
            onChange={ this.handleChange }
            array={ expenseCategories }
          />
          <input type="submit" value="Adicionar despesa" />
        </form> */}

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
