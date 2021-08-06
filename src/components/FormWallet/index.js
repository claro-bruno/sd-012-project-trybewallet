import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../Input';
import Select from '../Select';
import { fetchExpense, END_POINT } from '../../actions';
import TableWallet from '../Table';

const methodArray = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tagArray = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

const INITIAL_STATE = {
  value: '',
  description: '',
  currency: 'USD',
  currencies: [],
  method: methodArray[0],
  tag: tagArray[0],
  exchangeRates: {},
};

class FormWallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchCurrencies = this.fetchCurrencies.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  async fetchCurrencies() {
    try {
      const request = await fetch(END_POINT);
      const exchangeRates = await request.json();

      const currencies = Object.keys(exchangeRates)
        .filter((currency) => currency !== 'USDT');

      this.setState((state) => ({
        ...state,
        currencies,
        exchangeRates,
      }));
    } catch (error) {
      console.log(error);
    }
  }

  handleChange({ target: { name, value } }) {
    this.setState((state) => ({
      ...state,
      [name]: value,
    }));
  }

  async handleSubmit(e) {
    e.preventDefault();

    const { value, description, currency, method, tag, exchangeRates } = this.state;
    const { getExpensesInfos, setExpenseInfos } = this.props;

    const expense = {
      id: getExpensesInfos.length,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };

    setExpenseInfos(expense);
  }

  renderValueInput() {
    const { value } = this.state;
    return (
      <Input
        label="Valor"
        type="number"
        id="value-input"
        name="value"
        value={ value }
        onChange={ this.handleChange }
      />
    );
  }

  renderDescriptionInput() {
    const { description } = this.state;
    return (
      <Input
        label="Descrição"
        type="text"
        id="description-input"
        name="description"
        value={ description }
        onChange={ this.handleChange }
      />
    );
  }

  renderCurrencySelect() {
    const { currency, currencies } = this.state;
    return (
      <Select
        label="Moeda"
        id="currency-input"
        value={ currency }
        name="currency"
        onChange={ this.handleChange }
      >
        {currencies}
      </Select>
    );
  }

  renderPaymentMethodSelect() {
    const { method } = this.state;
    return (
      <Select
        label="Método de pagamento"
        id="method-input"
        name="method"
        value={ method }
        onChange={ this.handleChange }
      >
        {methodArray}
      </Select>
    );
  }

  renderTagSelect() {
    const { tag } = this.state;
    return (
      <Select
        label="Tag"
        id="tag-input"
        name="tag"
        value={ tag }
        onChange={ this.handleChange }
      >
        {tagArray}
      </Select>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          {this.renderValueInput()}
          {this.renderCurrencySelect()}
          {this.renderPaymentMethodSelect()}
          {this.renderTagSelect()}
          {this.renderDescriptionInput()}
          <button
            type="submit"
          >
            Adicionar despesa
          </button>
        </form>
        <TableWallet />
      </div>
    );
  }
}

FormWallet.propTypes = {
  setExpenseInfos: PropTypes.func,
  getExpensesInfos: PropTypes.arrayOf(
    PropTypes.object,
  ),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  setExpenseInfos: (expense) => dispatch(fetchExpense(expense)),
});

const mapStateToProps = ({ wallet }) => ({
  getExpensesInfos: wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(FormWallet);
