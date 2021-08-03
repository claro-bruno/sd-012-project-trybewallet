import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputValue from './InputValue';
import InputDescribe from './InputDescribe';
import Currency from './Currency';
import Payment from './Payment';
import Tag from './Tag';
import { listAction } from '../actions/index';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currency: 'USD',
      description: '',
      exchangeRates: [],
      id: 0,
      method: 'Dinheiro',
      tag: 'Alimentação',
      value: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleGetState = this.handleGetState.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleGetState() {
    const { getValue } = this.props;
    getValue(this.state);
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        <form>
          <InputValue
            handleChange={ this.handleChange }
            value={ value }
          />
          <InputDescribe
            handleChange={ this.handleChange }
            description={ description }
          />
          <Currency
            handleChange={ this.handleChange }
            currency={ currency }
          />
          <Payment
            handleChange={ this.handleChange }
            method={ method }
          />
          <Tag
            handleChange={ this.handleChange }
            tag={ tag }
          />
          <button
            type="button"
            name="add"
            onClick={ this.handleGetState }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getValue: (expenses) => dispatch(listAction(expenses)),
});

export default connect(null, mapDispatchToProps)(Form);

Form.propTypes = {
  getValue: PropTypes.func,
}.isRequired;
