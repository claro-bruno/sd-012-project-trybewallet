import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from '../components/Select';

const payment = {
  optionsArray: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
  id: 'select-payment',
  textLabel: 'Método de pagamento',
  value: ['cash', 'credit', 'debit'],
};

const tag = {
  optionsArray: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
  id: 'select-tag',
  textLabel: 'Tag',
  value: ['food', 'leisure', 'work', 'transport', 'health'],
};

const currency = {
  optionsArray: ['doletas', 'eurozitos', 'fake', 'libre'],
  id: 'select-currency',
  textLabel: 'Moeda',
  value: 'currency',
};

class Wallet extends React.Component {
  render() {
    const { email } = this.props;

    return (
      <>
        <header>
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">{ `R$${0}`}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <main>
          <form>
            <label htmlFor="input-value">
              Valor
              <input type="text" name="value" id="input-value" />
            </label>
            <label htmlFor="input-description">
              Descrição
              <input type="text" name="description" id="input-description" />
            </label>
            <Select options={ tag } />
            <Select options={ payment } />
            <Select options={ currency } />
          </form>
        </main>
      </>

    );
  }
}

const mapStateToPrps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToPrps)(Wallet);
