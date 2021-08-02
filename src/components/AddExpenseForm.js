import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import CurrencySelect from './CurrencySelect';
import PaymentSelect from './PaymentSelect';
import TagSelect from './TagSelect';
import { actionGetExpense, actionFetchApiExchangeRates } from '../actions';

class AddExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valor: '',
      descricao: '',
      moeda: 'USD',
      pagamento: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    const { fetchApiExchangeRates } = this.props;
    fetchApiExchangeRates(this.state);
    this.setState({
      valor: '',
      descricao: '',
      moeda: 'USD',
      pagamento: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  render() {
    const { valor, descricao, moeda, pagamento, tag } = this.state;
    return (
      <section>
        <Input
          name="valor"
          label="Valor: "
          type="text"
          value={ valor }
          placeholder="Insira o valor da despesa"
          onChange={ this.handleChange }
        />
        <Input
          name="descricao"
          label="Descrição: "
          type="text"
          value={ descricao }
          placeholder="Insira descrição da despesa"
          onChange={ this.handleChange }
        />
        <CurrencySelect
          value={ moeda }
          onChange={ this.handleChange }
        />
        <PaymentSelect
          value={ pagamento }
          onChange={ this.handleChange }
        />
        <TagSelect
          value={ tag }
          onChange={ this.handleChange }
        />
        <button
          type="submit"
          onClick={ this.handleSubmit }
        >
          Adicionar despesa
        </button>
      </section>
    );
  }
}

AddExpenseForm.propTypes = {
  // email: PropTypes.string.isRequired,
  // currencies: PropTypes.arrayOf().isRequired,
  // expenses: PropTypes.arrayOf().isRequired,
  // getExpenseStore: PropTypes.func.isRequired,
  fetchApiExchangeRates: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getExpenseStore: (state) => dispatch(actionGetExpense(state)),
  fetchApiExchangeRates: (state) => dispatch(actionFetchApiExchangeRates(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenseForm);
