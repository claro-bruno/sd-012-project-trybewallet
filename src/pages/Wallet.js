import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import './wallet.css';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.renderMetPag = this.renderMetPag.bind(this);
    this.renderTag = this.renderTag.bind(this);

    this.state = {

    };
  }

  renderMetPag() {
    return (
      <label htmlFor="met-pagamento">
        Método de pagamento
        <select type="text" id="met-pagamento">
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTag() {
    return (
      <label htmlFor="tag">
        Tag
        <select type="text" id="tag">
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
    const { userEmail } = this.props;

    return (
      <div>
        <header>
          <h1>TrybeWallet</h1>
          <h3 data-testid="email-field">
            Email:&nbsp;
            {userEmail}
          </h3>
          <h3 data-testid="total-field">
            Despesa total: R$ 0
          </h3>
          <h3 data-testid="header-currency-field">BRL</h3>
        </header>
        <form className="wallet-form">
          <label htmlFor="valor">
            Valor
            <input type="text" id="valor" />
          </label>
          <label htmlFor="descricao">
            Descrição
            <input type="text" id="descricao" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select type="text" id="moeda">
              <option>moeda1</option>
            </select>
          </label>
          { this.renderTag() }
          { this.renderMetPag() }
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Wallet.propTypes = {
  userEmail: propTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
