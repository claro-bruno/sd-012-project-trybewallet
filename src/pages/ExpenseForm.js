import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, func, string } from 'prop-types';
import AddExpensesButton from './AddExpensesButton';
import { fetchForExpense } from '../actions/index';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitToExchangeRates = this.onSubmitToExchangeRates.bind(this);
  }

  onSubmitToExchangeRates() {
    const { sendToExchangeRates } = this.props;
    const { value, description, currency, method, tag } = this.state;
    sendToExchangeRates({ value, description, currency, method, tag });
    this.setState({
      value: 0, description: '', currency: 'USD', method: 'Dinheiro', tag: 'Alimentação',
    });
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { apiResponse } = this.props;
    // const { id, value, description, currency, method, tag, exchangeRates } = this.props;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input id="valor" type="number" name="value" onChange={ this.handleChange } />
        </label>
        <label htmlFor="moeda">
          Moedas
          <select id="moeda" name="currency" onChange={ this.handleChange }>
            { apiResponse.map(
              (moeda,
                index) => (<option key={ index } value={ moeda }>{moeda}</option>),
            )}
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select id="pagamento" name="method" onChange={ this.handleChange }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Tag
          <select id="categoria" name="tag" onChange={ this.handleChange }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <label htmlFor="descricao">
          Descrição
          <input
            id="descricao"
            type="text"
            name="description"
            onChange={ this.handleChange }
          />
        </label>
        <AddExpensesButton onSubmitToExchangeRates={ this.onSubmitToExchangeRates } />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  apiResponse: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  sendToExchangeRates: (stateData) => dispatch(fetchForExpense(stateData)),
});

ExpenseForm.propTypes = ({
  apiResponse: arrayOf(string).isRequired,
  // id: number.isRequired,
  // value: string.isRequired,
  // description: string.isRequired,
  // currency: string.isRequired,
  // method: string.isRequired,
  // tag: string.isRequired,
  // exchangeRates: objectOf(string).isRequired,
  sendToExchangeRates: func.isRequired,
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
