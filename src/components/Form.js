import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchExpense } from '../actions';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderValue = this.renderValue.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
    this.renderCurrency = this.renderCurrency.bind(this);
    this.renderMethod = this.renderMethod.bind(this);
    this.renderTag = this.renderTag.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick(state) {
    const { sendExpense } = this.props;
    sendExpense(state);
    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    }));
  }

  renderValue(value) {
    return (
      <label className="form-items" htmlFor="value">
        Valor
        <input
          value={ value }
          id="value"
          type="number"
          name="value"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderDescription(description) {
    return (
      <label className="form-items" htmlFor="description">
        Descrição
        <input
          value={ description }
          id="description"
          type="text"
          name="description"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderCurrency(currencies, currency) {
    return (
      <label className="form-items" htmlFor="currency">
        Moeda
        <select
          value={ currency }
          id="currency"
          type="text"
          name="currency"
          onChange={ this.handleChange }
        >
          {currencies.map((mapCurrency, index) => (
            <option key={ index }>{mapCurrency.code}</option>))}
        </select>
      </label>
    );
  }

  renderMethod(method) {
    return (
      <label className="form-items" htmlFor="method">
        Método de pagamento
        <select
          value={ method }
          id="method"
          type="text"
          name="method"
          onChange={ this.handleChange }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTag(tag) {
    return (
      <label className="form-items" htmlFor="tag">
        Tag
        <select
          value={ tag }
          id="tag"
          type="text"
          name="tag"
          onChange={ this.handleChange }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;

    return (
      <form className="wallet-form">

        { this.renderValue(value) }
        { this.renderDescription(description) }
        { this.renderCurrency(currencies, currency) }
        { this.renderMethod(method) }
        { this.renderTag(tag) }

        <button
          type="button"
          onClick={ () => this.handleClick(this.state) }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendExpense: (allExpenses) => dispatch(fetchExpense(allExpenses)),
});

Form.propTypes = ({
  currencies: PropTypes.array,
  sendExpense: PropTypes.func,
}).isRequired;

export default connect(null, mapDispatchToProps)(Form);
