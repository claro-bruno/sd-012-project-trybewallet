import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../Input';
import Select from '../Select';

const paymentMethodArray = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tagArray = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

const INITIAL_STATE = {
  value: '',
  currency: '',
  paymentMethod: paymentMethodArray[0],
  tag: tagArray[0],
  description: '',
};

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState((state) => ({
      ...state,
      [name]: value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      ...prevState,
      ...INITIAL_STATE,
    }));
  }

  renderValueInput() {
    const { value } = this.state;
    return (
      <Input
        label="Valor"
        id="value-input"
        name="value"
        type="number"
        value={ value }
        onChange={ this.handleChange }
      />
    );
  }

  renderCurrencySelect() {
    const { currencies } = this.props;
    const { currency } = this.state;
    return (
      <Select
        label="Moeda"
        id="currency-input"
        name="currency"
        value={ currency }
        onChange={ this.handleChange }
      >
        {currencies}
      </Select>
    );
  }

  renderPaymentMethodSelect() {
    const { paymentMethod } = this.state;
    return (
      <Select
        label="Método de pagamento"
        id="paymentMethod-input"
        name="paymentMethod"
        value={ paymentMethod }
        onChange={ this.handleChange }
      >
        {paymentMethodArray}
      </Select>
    );
  }

  renderTagSelect() {
    const { tag } = this.state;
    return (
      <Select
        label="Tag"
        id="tag-input"
        name="tag"
        value={ tag }
        onChange={ this.handleChange }
      >
        {tagArray}
      </Select>
    );
  }

  renderDescriptionInput() {
    const { description } = this.state;
    return (
      <Input
        label="Descrição"
        id="description-input"
        name="description"
        type="text"
        value={ description }
        onChange={ this.handleChange }
      />
    );
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        {this.renderValueInput()}
        {this.renderCurrencySelect()}
        {this.renderPaymentMethodSelect()}
        {this.renderTagSelect()}
        {this.renderDescriptionInput()}
        <button
          type="submit"
        >
          Adicionar dispesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Form.propTypes = {
  getCurrency: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ),
}.isRequired;

export default connect(mapStateToProps, null)(Form);
