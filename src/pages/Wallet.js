import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field" id="email">{ email }</p>
          <p data-testid="total-field"> 0 </p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <form>
          <label htmlFor="valor">
            valor
            <input id="valor" />
          </label>
          <label htmlFor="descrição">
            descrição
            <textarea type="text" id="descrição" name="descrição" />
          </label>
          <label htmlFor="moeda">
            moeda
            <select id="moeda">
              { null }
            </select>
          </label>
          <label htmlFor="metodopagamento">
            Método de pagamento
            <select id="metodopagamento">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            tag
            <select id="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
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

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
