import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { payMethods, tags } from '../helpers/optionsSelects';
import { fetchCurrencies } from '../actions';
import Input from './Input';
import Select from './Select';

class NewExpenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      description: '',
      currency: '',
      payMethod: 'Dinheiro',
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

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { expenses } = this.props;
    const newExpense = { id: expenses.length, ...this.state };
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
    const { value, description, currency, payMethod, tag } = this.state;
    const { currencies } = this.props;
    return (
      <form className="form-newExpense" method="get">
        <Input
          textLabel="Valor"
          id="value"
          type="number"
          step="0.01"
          name="value"
          onChange={ this.handleChange }
          value={ value }
        />
        <Input
          textLabel="Descrição"
          id="description"
          type="text"
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
          name="payMethod"
          onChange={ this.handleChange }
          value={ payMethod }
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
});

NewExpenses.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  getCurrencies: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewExpenses);
