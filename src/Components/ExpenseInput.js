/* eslint-disable max-lines-per-function */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { paymentMethods, tags } from '../data';
import { fetchAPI } from '../actions';
import Input from './Input';
import Select from './Select';

class ExpenseInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: paymentMethods[0],
      tag: tags[0],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.id]: target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { dispatchFetchApi } = this.props;
    dispatchFetchApi('toAddNewExpense', this.state);
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currenciesFromStore } = this.props;
    return (
      <form onSubmit={ this.handleSubmit }>
        <Input
          id="value"
          type="number"
          value={ value }
          onChange={ this.handleChange }
          text="Valor"
        />
        <Input
          id="description"
          type="text"
          value={ description }
          onChange={ this.handleChange }
          text="Descrição"
        />
        <Select
          id="currency"
          value={ currency }
          onChange={ this.handleChange }
          text="Moeda"
          options={ currenciesFromStore }
        />
        <Select
          id="method"
          value={ method }
          onChange={ this.handleChange }
          text="Método de pagamento"
          options={ paymentMethods }
        />
        <Select
          id="tag"
          value={ tag }
          onChange={ this.handleChange }
          text="Tag"
          options={ tags }
        />
        <button
          type="submit"
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currenciesFromStore: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchApi: (reason, expense) => dispatch(fetchAPI(reason, expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseInput);

ExpenseInput.propTypes = {
  dispatchFetchApi: PropTypes.func.isRequired,
  currenciesFromStore: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape(),
  ])).isRequired,
};
