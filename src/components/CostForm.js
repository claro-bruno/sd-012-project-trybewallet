import React, { Component } from 'react';
import { func, arrayOf, string } from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI } from '../actions';

class CostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      description: '',
      currency: 0,
      paymentMethod: '',
      tag: '',
    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  renderPaymentMethod() {
    const { paymentMethod } = this.state;
    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <label htmlFor="payment-method-input">
        Método de pagamento:
        <select
          onChange={ (event) => this.setState({ paymentMethod: event.target.value }) }
          value={ paymentMethod }
          id="payment-method-input"
        >
          {methods.map((item, index) => (
            <option key={ index } value={ item }>{item}</option>))}
        </select>
      </label>
    );
  }

  renderTagSelection() {
    const { tag } = this.state;
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <label htmlFor="tag-input">
        Tag:
        <select
          onChange={ (event) => this.setState({ tag: event.target.value }) }
          value={ tag }
          id="tag-input"
        >
          {/* <option value="" disabled> </option> */}
          {tags.map((item, index) => (
            <option key={ index } value={ item }>{ item }</option>))}
        </select>
      </label>
    );
  }

  render() {
    const { value, description, currency } = this.state;
    const { currenciesNames } = this.props;
    return (
      <form>
        <label htmlFor="value-input">
          Valor:
          <input
            type="text"
            id="value-input"
            value={ value }
            onChange={ (event) => this.setState({ value: event.target.value }) }
          />
        </label>
        <label htmlFor="description-input">
          Descrição:
          <input
            type="text"
            id="description-input"
            value={ description }
            onChange={ (event) => this.setState({ description: event.target.value }) }
          />
        </label>
        <label htmlFor="currency-input">
          Moeda:
          <select
            onChange={ (event) => this.setState({ currency: event.target.value }) }
            value={ currency }
            id="currency-input"
          >
            { currenciesNames && currenciesNames.map((item, index) => (
              <option key={ index }>{item}</option>
            ))}
          </select>
        </label>
        { this.renderPaymentMethod()}
        { this.renderTagSelection()}
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  currenciesNames: state.wallet.currenciesNames,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchAPI()),
});

CostForm.propTypes = {
  getCurrencies: func.isRequired,
  currenciesNames: arrayOf(string),
};

CostForm.defaultProps = {
  currenciesNames: undefined,
};

export default connect(mapStateToProps, mapDispatchToProps)(CostForm);
