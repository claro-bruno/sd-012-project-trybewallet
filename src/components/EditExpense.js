import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { editExpense, fetchCurrency } from '../actions';
import Input from './Input';
import Select from './Select';
import { methodOptions, tagOptions } from '../helpers/optionsData';

class EditExpense extends React.Component {
  constructor(props) {
    super(props);

    const { id, expenses } = this.props;
    const editing = expenses.find((expense) => expense.id === id);
    const { value, description, currency, method, tag } = editing;

    this.state = {
      id,
      value,
      description,
      currency,
      method,
      tag,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleClick() {
    const { edit, onClick } = this.props;
    const editedExpense = { ...this.state };
    edit(editedExpense);
    onClick();
  }

  render() {
    const { value, description, method, currency, tag } = this.state;
    const { currencyOptions } = this.props;
    return (
      <section className="edit-expense">
        <Input
          text="Valor: "
          type="number"
          name="value"
          min="0"
          dataTestId="value-input"
          value={ value }
          onChange={ this.handleChange }
        />
        <Input
          text="Descrição: "
          type="text"
          name="description"
          dataTestId="description-input"
          value={ description }
          onChange={ this.handleChange }
        />
        <Select
          text="Moeda: "
          name="currency"
          dataTestId="currency-input"
          selected={ currency }
          onChange={ this.handleChange }
          options={ currencyOptions }
        />
        <Select
          text="Método de pagamento: "
          name="method"
          dataTestId="method-input"
          selected={ method }
          onChange={ this.handleChange }
          options={ methodOptions }
        />
        <Select
          text="Tag: "
          name="tag"
          dataTestId="tag-input"
          selected={ tag }
          onChange={ this.handleChange }
          options={ tagOptions }
        />
        <button type="button" onClick={ this.handleClick }>Editar despesa</button>
      </section>
    );
  }
}

const mapDisptachToProps = (dispatch) => ({
  edit: (expense) => dispatch(editExpense(expense)),
  getCurrencies: () => dispatch(fetchCurrency()),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  currencyOptions: state.wallet.currencies,
  loading: state.wallet.loading,
});

EditExpense.propTypes = {
  id: propTypes.number.isRequired,
  edit: propTypes.func.isRequired,
  onClick: propTypes.func.isRequired,
  expenses: propTypes.arrayOf(propTypes.shape({
    id: propTypes.number.isRequired,
    value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
    description: propTypes.string.isRequired,
    currency: propTypes.string.isRequired,
    method: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
  })).isRequired,
  getCurrencies: propTypes.func.isRequired,
  currencyOptions: propTypes.arrayOf(propTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDisptachToProps)(EditExpense);
