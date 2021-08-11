import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import Button from './Button';
import { methods, tags } from '../data';
import { fetchApi, registerExpense } from '../actions/wallet';

class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: '',
      currency: 'USD',
      tag: 'Alimentação',
      method: 'Dinheiro',
      description: '',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.renderInputValue = this.renderInputValue.bind(this);
    this.renderSelectCurrency = this.renderSelectCurrency.bind(this);
    this.renderSelectMethod = this.renderSelectMethod.bind(this);
    this.renderSelectTag = this.renderSelectTag.bind(this);
    this.renderInputDescription = this.renderInputDescription.bind(this);
    this.handleCLick = this.handleCLick.bind(this);
  }

  componentDidMount() {
    const { setApi } = this.props;

    setApi();
  }

  handleChange({ target }) {
    const { value, name } = target;

    this.setState({ [name]: value });
  }

  async handleCLick() {
    const { setApi, setExpense, currencies } = this.props;

    await setApi();
    await this.setState({ exchangeRates: currencies });
    await setExpense(this.state);

    await this.setState((prevState) => ({
      id: prevState.id + 1,
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      exchangeRates: {},
    }));
  }

  renderInputValue() {
    const { value } = this.state;
    return (
      <Input
        id="value"
        type="number"
        name="value"
        value={ value }
        labelText="Valor"
        handleChange={ this.handleChange }
      />
    );
  }

  renderSelectCurrency() {
    const { currencies } = this.props;
    const { currency } = this.state;

    const currencyList = Object.keys(currencies)
      .filter((currencyInitials) => currencyInitials !== 'USDT');

    return (
      <Select
        id="currency"
        name="currency"
        labelText="Moeda"
        value={ currency }
        options={ currencyList }
        handleChange={ this.handleChange }
      />
    );
  }

  renderSelectMethod() {
    const { method } = this.state;
    return (
      <Select
        id="method"
        name="method"
        labelText="Método de pagamento"
        value={ method }
        options={ methods }
        handleChange={ this.handleChange }
      />
    );
  }

  renderSelectTag() {
    const { tag } = this.state;
    return (
      <Select
        id="tag"
        name="tag"
        labelText="Tag"
        value={ tag }
        options={ tags }
        handleChange={ this.handleChange }
      />
    );
  }

  renderInputDescription() {
    const { description } = this.state;
    return (
      <Input
        id="description"
        type="text"
        name="description"
        value={ description }
        labelText="Descrição"
        handleChange={ this.handleChange }
      />
    );
  }

  render() {
    return (
      <form>
        { this.renderInputValue() }
        { this.renderSelectCurrency() }
        { this.renderSelectMethod() }
        { this.renderSelectTag() }
        { this.renderInputDescription() }

        <Button
          name="login-button"
          text="Adicionar despesa"
          handleClick={ this.handleCLick }
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (disptach) => ({
  setApi: () => disptach(fetchApi()),
  setExpense: (expense) => disptach(registerExpense(expense)),
});

ExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
}.isrequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
