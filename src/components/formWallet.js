import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';
import Currencies from './currencies';

class FormWallet extends React.Component {
  componentDidMount() {
    const { fetchApi } = this.props;
    fetchApi();
  }

  selectCurrenciesFunction() {
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          id="currency"
          onChange={ this.inputHandle }
          name="currency"
          data-testid="currency-input"
          className="formInputs"
        >
          <Currencies />
        </select>
      </label>
    );
  }

  selectPaymentFunction() {
    return (
      <label htmlFor="payment">
        Método de pagamento:
        <select
          id="payment"
          onChange={ this.inputHandle }
          name="method"
          data-testid="method-input"
          className="formInputs"
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  selectTagFunction() {
    return (
      <label htmlFor="tag">
        Tag:
        <select
          id="tag"
          onChange={ this.inputHandle }
          name="tag"
          data-testid="tag-input"
          className="formInputs"
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <section>
        <form>
          <label htmlFor="value">
            Valor:
            <input
              data-testid="value-input"
              onChange={ this.inputHandle }
              type="number"
              name="value"
              id="value"
            />
          </label>
          {this.selectCurrenciesFunction()}
          {this.selectPaymentFunction()}
          {this.selectTagFunction()}
          <label htmlFor="description">
            Descrição:
            <input
              onChange={ this.inputHandle }
              type="text"
              name="description"
              id="description"
              data-testid="description-input"
            />
          </label>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchApi: () => dispatch(fetchCurrencies()),
});

export default connect(null, mapDispatchToProps)(FormWallet);

FormWallet.propTypes = {
  fetchApi: PropTypes.func.isRequired,
};
