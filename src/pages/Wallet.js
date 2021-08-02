import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;

    return (
      <div>
        <header>
          <p>
            Email:
            <span data-testid="email-field">{` ${email} `}</span>
            Despesa Total: R$
            <span data-testid="total-field">{0}</span>
            <span data-testid="header-currency-field"> BRL</span>
          </p>
        </header>
        <form>
          <label htmlFor="input-value">
            Valor
            <input id="input-value" type="number" />
          </label>
          <label htmlFor="input-description">
            Descrição
            <input id="input-description" type="text" />
          </label>
          <label htmlFor="input-currency">
            Moeda
            <select id="input-currency" aria-label="Moeda" />
          </label>
          <label htmlFor="input-payment">
            Método de pagamento
            <select id="input-payment" aria-label="Método de pagamento">
              <option value="dinheiro">Dinheiro</option>
              <option value="cartao-de-credito">Cartão de crédito</option>
              <option value="cartao-de-debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="input-category">
            Tag
            <select id="input-category" aria-label="Tag">
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({ email: state.user.email });

export default connect(mapStateToProps)(Wallet);
