import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchExpense, fetchCurrency } from '../actions';
import Input from './Input';
import Select from './Select';
import { methodOptions, tagOptions } from '../helpers/optionsData';

class AddExpense extends React.Component {
  constructor(props) {
    super(props);

    const { expenses } = this.props;
    let id = 0;

    if (expenses.length > 0) {
      id = (expenses[expenses.length - 1].id) + 1;
    }
    this.state = {
      id,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Comida',
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
    const { value, description } = this.state;
    if (value && description) {
      const { saveExpense } = this.props;
      const teste = { ...this.state };
      saveExpense(teste);
      this.setState((prevState) => ({
        id: prevState.id + 1,
        value: 0,
        description: '',
      }));
    }
  }

  render() {
    const { value, description } = this.state;
    const { currencyOptions } = this.props;
    return (
      <section className="add-expense">
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
          onChange={ this.handleChange }
          options={ currencyOptions }
        />
        <Select
          text="Método de pagamento: "
          name="method"
          dataTestId="method-input"
          onChange={ this.handleChange }
          options={ methodOptions }
        />
        <Select
          text="Tag: "
          name="tag"
          dataTestId="tag-input"
          onChange={ this.handleChange }
          options={ tagOptions }
        />
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveExpense: (expense) => dispatch(fetchExpense(expense)),
  getCurrencies: () => dispatch(fetchCurrency()),
});

const mapStateToProps = (state) => ({
  currencyOptions: state.wallet.currencies,
  expenses: state.wallet.expenses,
  loading: state.wallet.loading,
});

AddExpense.propTypes = {
  saveExpense: propTypes.func.isRequired,
  getCurrencies: propTypes.func.isRequired,
  currencyOptions: propTypes.arrayOf(propTypes.string).isRequired,
  expenses: propTypes.arrayOf(propTypes.shape({
    id: propTypes.number,
  })).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
