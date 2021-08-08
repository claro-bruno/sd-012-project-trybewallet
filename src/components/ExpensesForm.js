import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ValueInput from './ValueInput';
import DescriptionInput from './DescriptionInput';
import CurrencyInput from './CurrencyInput';
import MethodInput from './MethodInput';
import TagInput from './TagInput';
import { setExpense } from '../actions';

/**
 * Consultei o repositório de Cristian Brum para resolver essa parte.
 * Link: https://github.com/tryber/sd-011-project-trybewallet/pull/2/commits/509915ffc966093751035625fa747638888af868
 */

const INITIAL_STATE = {
  value: 0,
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

class ExpensesForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.handleChange = this.handleChange.bind(this);
    this.btnSaveExpenses = this.btnSaveExpenses.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  btnSaveExpenses() {
    const { saveExpense, id } = this.props;
    const { value, description, currency, method, tag } = this.state;
    saveExpense({ id, value, description, currency, method, tag });
    this.setState({ ...INITIAL_STATE });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <ValueInput handle={ this.handleChange } value={ value } />
        <DescriptionInput handle={ this.handleChange } value={ description } />
        <CurrencyInput handle={ this.handleChange } value={ currency } />
        <MethodInput handle={ this.handleChange } value={ method } />
        <TagInput handle={ this.handleChange } value={ tag } />
        <button type="button" onClick={ this.btnSaveExpenses }>Adicionar Despesas</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.wallet.id,
});

const mapDispatchToProps = (dispatch) => ({
  saveExpense: (expense) => dispatch(setExpense(expense)),
});

ExpensesForm.propTypes = {
  saveExpense: PropTypes.func,
  id: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
