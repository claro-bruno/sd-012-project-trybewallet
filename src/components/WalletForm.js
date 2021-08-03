import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Input';
import Select from './Select';
import { getExpense, fetchCurrencies } from '../actions/actionWallet';

class WalletForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.callInputs = this.callInputs.bind(this);
    this.callSelects = this.callSelects.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  callInputs() {
    const { value, description } = this.state;
    return (
      <span>
        <Input
          id="input-value"
          type="number"
          label="Valor"
          inputName="value"
          inputValue={ value }
          handleChange={ this.handleChange }
        />
        <Input
          id="input-description"
          type="text"
          label="Descrição"
          inputName="description"
          inputValue={ description }
          handleChange={ this.handleChange }
        />
      </span>
    );
  }

  callSelects() {
    const { currencies } = this.props;
    const { currency, method, tag } = this.state;
    return (
      <span>
        <Select
          id="input-currency"
          label="Moeda"
          options={ [...currencies] }
          selectName="currency"
          selectValue={ currency }
          handleChange={ this.handleChange }
        />
        <Select
          id="input-method"
          label="Método de pagamento"
          options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          selectName="method"
          selectValue={ method }
          handleChange={ this.handleChange }
        />
        <Select
          id="input-tag"
          label="Tag"
          options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          selectName="tag"
          selectValue={ tag }
          handleChange={ this.handleChange }
        />
      </span>
    );
  }

  handleClick() {
    const { saveExpense, expenses } = this.props;
    const id = expenses.length;
    fetchCurrencies()
      .then((response) => saveExpense(this.state, response, id));
    // saveExpense(this.state, currencies);
  }

  render() {
    return (
      <form>
        { this.callInputs() }
        { this.callSelects() }
        <button
          type="button"
          onClick={ () => this.handleClick() }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
  ),
  saveExpense: PropTypes.func,
  expenses: PropTypes.arrayOf(PropTypes.object),
};

WalletForm.defaultProps = {
  currencies: [
    {},
    {},
  ],
  saveExpense: () => {},
  expenses: [
    {},
    {},
  ],
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  saveExpense: (state, currencies, id) => dispatch(getExpense(state, currencies, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
