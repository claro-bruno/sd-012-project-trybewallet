import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserInputs from '../UserInputs';
import GenericSelect from '../GenericSelect';
import GenericButton from '../GenericButton';
import * as utils from './utils';
import { actionExpense } from '../../actions';

class WalletForm extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      amountSpent: 0,
      description: '',
      currency: 'USD',
      payment: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  handleClick() {
    const { expenses } = this.props;
    const {
      id, amountSpent, description, currency, payment, tag,
    } = this.state;
    const objetao = {
      id,
      value: amountSpent,
      description,
      currency,
      method: payment,
      tag,
    };
    expenses(objetao);
    this.setState({
      id: id + 1,
    });
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <UserInputs onChange={ this.handleChange } { ...utils.amountSpentProps } />
        <UserInputs onChange={ this.handleChange } { ...utils.descriptionProps } />
        <GenericSelect
          onChange={ this.handleChange }
          options={ currencies }
          { ...utils.selectCurrencyProps }
        />
        <GenericSelect onChange={ this.handleChange } { ...utils.selectPaymentProps } />
        <GenericSelect onChange={ this.handleChange } { ...utils.selectTagProps } />
        <GenericButton onClick={ this.handleClick } { ...utils.addExpenseProps } />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  expenses: (objetao) => dispatch(actionExpense(objetao)),
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.shape({
    option: PropTypes.string,
    value: PropTypes.string,
  })),
}.isRequired;

export default connect(null, mapDispatchToProps)(WalletForm);
