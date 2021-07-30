import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchData, addExpense } from '../actions/index';

const aliment = 'Alimentação';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: aliment,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderCurrencies = this.renderCurrencies.bind(this);
    this.renderPayments = this.renderPayments.bind(this);
    this.renderTags = this.renderTags.bind(this);
  }

  componentDidMount() {
    const { fetchCurrency } = this.props;
    fetchCurrency();
    this.renderCurrencies();
    this.renderPayments();
    this.renderTags();
  }

  handleClick(event) {
    const { value, description, currency, method, tag } = this.state;
    const expenses = { value, description, currency, method, tag };
    const { addButton } = this.props;

    addButton(expenses);

    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: aliment,
    });
    event.preventDefault();
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  renderCurrencies() {
    const { coins } = this.props;
    const { currency } = this.state;

    return (
      <label htmlFor="currency">
        Moeda
        <select
          name="currency"
          id="currency"
          value={ currency }
          onChange={ this.handleChange }
        >
          {coins.map((coin) => <option key={ coin } value={ coin }>{coin}</option>)}
        </select>
      </label>
    );
  }

  renderPayments() {
    const values = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const { method } = this.state;

    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          name="method"
          id="method"
          value={ method }
          onChange={ this.handleChange }
        >
          {values.map((payment) => (
            <option value={ payment } key={ payment }>{payment}</option>
          ))}
        </select>
      </label>
    );
  }

  renderTags() {
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { tag } = this.state;

    return (
      <label htmlFor="tag">
        Tag
        <select
          name="tag"
          id="tag"
          value={ tag }
          onChange={ this.handleChange }
        >
          {tags.map((tagValue) => (
            <option value={ tagValue } key={ tagValue }>{tagValue}</option>
          ))}
        </select>
      </label>
    );
  }

  render() {
    const { value, description } = this.state;
    const {
      handleClick,
      handleChange,
      renderCurrencies,
      renderPayments,
      renderTags,
    } = this;

    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="text"
            name="value"
            id="value"
            value={ value }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            id="description"
            value={ description }
            onChange={ handleChange }
          />
        </label>
        {renderCurrencies()}
        {renderPayments()}
        {renderTags()}
        <button type="button" onClick={ handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

Form.propTypes = {
  coins: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  fetchCurrency: PropTypes.func.isRequired,
  addButton: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  coins: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: (state) => dispatch(fetchData(state)),
  addButton: (data) => dispatch(addExpense(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
