import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies, sumTotalExpenses } from '../../actions';
import Input from '../Input';
import Select from '../Select';

const paymentMethodArray = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tagArray = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

const INITIAL_STATE = {
  value: '',
  currency: 'USD',
  method: paymentMethodArray[0],
  tag: tagArray[0],
  description: '',
};

class WalletAddExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async handleSubmit(e) {
    e.preventDefault();

    const { setExpenseToStore, setTotalExpensesToStore } = this.props;
    await setExpenseToStore(this.state);
    await setTotalExpensesToStore();

    this.setState((prevState) => ({
      ...prevState,
      ...INITIAL_STATE,
    }));
  }

  renderValueInput() {
    const { value } = this.state;
    return (
      <Input
        labelText="Valor"
        id="value-input"
        name="value"
        type="number"
        value={ value }
        onChange={ this.handleChange }
      />
    );
  }

  renderCurrencySelect() {
    const { currency } = this.state;
    const { currencies } = this.props;
    return (
      <Select
        labelText="Moeda"
        id="currency-input"
        name="currency"
        value={ currency }
        onChange={ this.handleChange }
      >
        {currencies}
      </Select>
    );
  }

  renderPaymentMethodSelect() {
    const { paymentMethod } = this.state;
    return (
      <Select
        labelText="Método de pagamento"
        id="method-input"
        name="method"
        value={ paymentMethod }
        onChange={ this.handleChange }
      >
        {paymentMethodArray}
      </Select>
    );
  }

  renderTagSelect() {
    const { tag } = this.state;
    return (
      <Select
        labelText="Tag"
        id="tag-input"
        name="tag"
        value={ tag }
        onChange={ this.handleChange }
      >
        {tagArray}
      </Select>
    );
  }

  renderDescriptionInput() {
    const { description } = this.state;
    return (
      <Input
        labelText="Descrição"
        id="description-input"
        name="description"
        type="text"
        value={ description }
        onChange={ this.handleChange }
      />
    );
  }

  render() {
    return (
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
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  setExpenseToStore: (expense) => dispatch(fetchCurrencies(expense)),
  setTotalExpensesToStore: () => dispatch(sumTotalExpenses()),
});

WalletAddExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  setExpenseToStore: PropTypes.func.isRequired,
  setTotalExpensesToStore: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletAddExpenseForm);
