import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Input';
import Select from './Select';
import { addNewExpenseAndCurrencyQuote } from '../actions/index';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Lazer',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    const { getExpense } = this.props;
    const { id } = this.state;
    if (!id) {
      getExpense(this.state);
      this.setState((prevState) => ({ id: prevState.id + 1 }));
    } else {
      this.setState((prevState) => ({ id: prevState.id + 1 }));
      getExpense(this.state);
    }
    event.preventDefault();
  }

  render() {
    const { value, description, currency,
      method, tag } = this.state;
    const { array, paymentMethodsArray, expenseCategories } = this.props;
    return (
      <form onSubmit={ this.handleSubmit }>
        <Input
          id="value"
          name="value"
          label="Valor"
          type="number"
          value={ value }
          onChange={ this.handleChange }
        />
        <Input
          name="description"
          label="Descrição"
          type="text"
          id="description"
          value={ description }
          onChange={ this.handleChange }
        />
        <Select
          name="currency"
          label="Moeda: "
          id="currency"
          value={ currency }
          onChange={ this.handleChange }
          array={ array }
        />
        <Select
          name="method"
          label="Método de pagamento: "
          id="method"
          value={ method }
          onChange={ this.handleChange }
          array={ paymentMethodsArray }
        />
        <Select
          name="tag"
          label="Tag: "
          id="tag"
          value={ tag }
          onChange={ this.handleChange }
          array={ expenseCategories }
        />
        <input type="submit" value="Adicionar despesa" />
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  value: PropTypes.number,
  onChange: PropTypes.func,
  description: PropTypes.string,
  currency: PropTypes.string,
  array: PropTypes.arrayOf(PropTypes.string),
  method: PropTypes.string,
  paymentMethodsArray: PropTypes.arrayOf(PropTypes.string),
  tag: PropTypes.string,
  expenseCategories: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

// const mapStateToProps = (state) => ({
//   currentQuote: state.addExpenseReducer.currentQuote,
// });

const mapDispatchToProps = (dispatch) => ({
  getExpense: (userInfos) => dispatch(addNewExpenseAndCurrencyQuote(userInfos)),
  // fetchAPIExchange: () => dispatch(fetchApiObject()),
});

export default connect(null, mapDispatchToProps)(Form);
