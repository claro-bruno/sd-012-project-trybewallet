import React from 'react';
import PropTypes from 'prop-types';
import UserInputs from '../UserInputs';
import GenericSelect from '../GenericSelect';
import {
  selectCurrencyProps,
  selectPaymentProps,
  selectTagProps,
  amountSpentProps,
  descriptionProps,
} from './utils';

class WalletForm extends React.Component {
  constructor() {
    super();

    this.state = {
      amountSpent: 0,
      description: '',
      currency: 'USD',
      payment: 'cash',
      tag: 'food',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: name === 'amountSpent' ? +value : value,
    });
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <UserInputs onChange={ this.handleChange } { ...amountSpentProps } />
        <UserInputs onChange={ this.handleChange } { ...descriptionProps } />
        <GenericSelect
          onChange={ this.handleChange }
          options={ currencies }
          { ...selectCurrencyProps }
        />
        <GenericSelect onChange={ this.handleChange } { ...selectPaymentProps } />
        <GenericSelect onChange={ this.handleChange } { ...selectTagProps } />
      </form>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.shape({
    option: PropTypes.string,
    value: PropTypes.string,
  })),
}.isRequired;

export default WalletForm;
