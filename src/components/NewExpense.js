import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { payMethods, tags } from '../helpers/optionsSelects';
import { fetchCurrencies, saveExpense } from '../actions';
import Input from './Input';
import Select from './Select';

const REGEX_VALUE = /^(\d*(,?|\.?)?\d{0,2})/;

class NewExpenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getCurrencies();
  }

  async getCurrencies() {
    const { getCurrencies } = this.props;
    await getCurrencies();
    const { currencies } = this.props;
    this.setState({ currency: currencies[0] || '' });
  }

  handleChange({ target }) {
    const value = target.name === 'value'
      ? (target.value).match(REGEX_VALUE)[0]
      : target.value;
    this.setState({ [target.name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { expenses, saveNewExpense, currencies } = this.props;
    const newExpense = { id: expenses.length, ...this.state };
    saveNewExpense(newExpense);
    this.setState({
      value: '',
      description: '',
      currency: currencies[0],
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  renderButton() {
    return (
      <button
        className="btn-addExpense"
        type="submit"
        onClick={ this.handleSubmit }
      >
        Adicionar despesa
      </button>
    );
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <form className="form-newExpense" method="get">
        <Input
          textLabel="Valor"
          id="value"
          name="value"
          onChange={ this.handleChange }
          value={ value }
        />
        <Input
          textLabel="Descrição"
          id="description"
          name="description"
          onChange={ this.handleChange }
          value={ description }
        />
        <Select
          textLabel="Moeda"
          id="currency"
          name="currency"
          onChange={ this.handleChange }
          value={ currency }
          options={ currencies }
        />
        <Select
          textLabel="Método de pagamento"
          id="pay-method"
          name="method"
          onChange={ this.handleChange }
          value={ method }
          options={ payMethods }
        />
        <Select
          textLabel="Tag"
          id="tag"
          name="tag"
          onChange={ this.handleChange }
          value={ tag }
          options={ tags }
        />
        {this.renderButton()}
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
  saveNewExpense: (expense) => dispatch(saveExpense(expense)),
});

NewExpenses.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  getCurrencies: PropTypes.func.isRequired,
  saveNewExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewExpenses);
