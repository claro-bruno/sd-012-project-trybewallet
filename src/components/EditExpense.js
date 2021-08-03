import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class EditExpense extends Component {
  constructor(props) {
    super(props);

    const { expenses, idToEdit } = this.props;

    const { value, currency, method, tag, description } = expenses[idToEdit];

    this.state = {
      value,
      currency,
      method,
      tag,
      description,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeExpenseToEdit = this.changeExpenseToEdit.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { idToEdit } = this.props;

    if (prevProps.idToEdit !== idToEdit) {
      this.changeExpenseToEdit();
    }
  }

  changeExpenseToEdit() {
    const { expenses, idToEdit } = this.props;
    const { value, currency, method, tag, description } = expenses[idToEdit];

    this.setState({
      value,
      currency,
      method,
      tag,
      description,
    });
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  renderValueInput() {
    const { value } = this.state;

    return (
      <label htmlFor="value">
        Valor
        <input
          name="value"
          id="value"
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderDescriptionInput() {
    const { description } = this.state;

    return (
      <label htmlFor="description">
        Descrição
        <input
          name="description"
          id="description"
          value={ description }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderCurrencySelect() {
    const { currency } = this.state;
    const { currencies } = this.props;

    return (
      <label htmlFor="currency">
        Moeda
        <select
          name="currency"
          id="currency"
          value={ currency }
          onChange={ this.handleChange }
        >
          {
            currencies
              .map((currencyName) => <option key={ currencyName }>{currencyName}</option>)
          }
        </select>
      </label>
    );
  }

  renderMethodSelect() {
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
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderCategorySelect() {
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
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          { this.renderValueInput() }
          { this.renderDescriptionInput() }
          { this.renderCurrencySelect() }
          { this.renderMethodSelect() }
          { this.renderCategorySelect() }
          <button type="submit">Editar Despesa</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  idToEdit: state.wallet.idToEdit,
});

export default connect(mapStateToProps)(EditExpense);

EditExpense.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  idToEdit: PropTypes.number.isRequired,
};
