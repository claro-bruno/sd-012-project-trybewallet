import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputValue from './InputValue';
import InputDescribe from './InputDescribe';
import Currency from './Currency';
import Payment from './Payment';
import Tag from './Tag';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      describeExpense: '',
      valueExpense: 0,
      currencyCheck: '',
      payment: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { valueExpense, describeExpense, currencyCheck, payment, tag } = this.state;
    return (
      <div>
        <form>
          <InputValue handleChange={ this.handleChange } value={ valueExpense } />
          <InputDescribe handleChange={ this.handleChange } value={ describeExpense } />
          <Currency handleChange={ this.handleChange } value={ currencyCheck } />
          <Payment handleChange={ this.handleChange } value={ payment } />
          <Tag handleChange={ this.handleChange } value={ tag } />
          <button
            type="button"
            name="adiciona"
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(Form);
