import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import PaymentMethod from './PaymentMethod';
import Tag from './Tag';
import Currencies from './Currencies';
import SubmitButton from './SubmitButton';
import { saveAndFetchExpenses } from '../actions/index';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.displaySubmitButton = this.displaySubmitButton.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { expensesToRedux } = this.props;
    const { value, description, currency, method, tag } = this.state;
    expensesToRedux({ value, description, currency, method, tag });
  }

  displaySubmitButton() {
    const submitButtonProps = {
      onClick: this.handleClick,
      buttonTxt: 'Adicionar despesa',
      name: '',
      id: '',
    };
    return <SubmitButton { ...submitButtonProps } />;
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const despesasInputProps = {
      type: 'number',
      placeholder: 'Despesa',
      id: 'valueInput',
      labelTxt: 'Valor',
      value,
      name: 'value',
      onChange: this.handleChange,
    };
    const descricaoInputProps = {
      type: 'text',
      placeholder: 'Detalhes da despesa',
      id: 'descriptionInput',
      labelTxt: 'Descrição',
      value: description,
      name: 'description',
      onChange: this.handleChange,
    };
    const currencysSelectProps = {
      value: currency,
      onChange: this.handleChange,
      name: 'currency',
    };
    const paymentMethodProps = {
      value: method,
      name: 'method',
      onChange: this.handleChange,
    };
    const tagSelectProps = {
      value: tag,
      name: 'tag',
      onChange: this.handleChange,
    };

    return (
      <form>
        <Input { ...despesasInputProps } />
        <Input { ...descricaoInputProps } />
        <Currencies { ...currencysSelectProps } />
        <PaymentMethod { ...paymentMethodProps } />
        <Tag { ...tagSelectProps } />
        { this.displaySubmitButton() }
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  expensesToRedux: (state) => dispatch(saveAndFetchExpenses(state)),
});

Form.propTypes = {
  expensesToRedux: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Form);
