import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor() {
    super();

    this.tipoMoeda = this.tipoMoeda.bind(this);
    this.valorDespesa = this.valorDespesa.bind(this);
    this.descricaoDespesa = this.descricaoDespesa.bind(this);
    this.metodoPagamento = this.metodoPagamento.bind(this);
    this.selecionarCategoria = this.selecionarCategoria.bind(this);
  }

  tipoMoeda() {
    return (
      <label htmlFor="teste-moeda">
        Moeda
        <select id="teste-moeda">
          Api
        </select>
      </label>

    );
  }

  valorDespesa() {
    return (
      <label htmlFor="teste-despesa">
        Valor
        <input
          id="teste-despesa"
          placeholder="adicionar valor da despesa"
        />
      </label>
    );
  }

  descricaoDespesa() {
    return (
      <label htmlFor="teste-descricao">
        Descrição
        <input
          id="teste-descricao"
          placeholder="adicionar descriçao da despesa"
        />
      </label>
    );
  }

  metodoPagamento() {
    return (
      <label htmlFor="teste-pagamento">
        Método de pagamento
        <select id="teste-pagamento">
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>

    );
  }

  selecionarCategoria() {
    return (
      <label htmlFor="teste-categoria">
        Tag
        <select id="teste-categoria">
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
    const { email } = this.props;

    return (
      <div>
        <header>
          TrybeWallet
          <p data-testid="email-field">
            e-mail usuário(a):
            { email }
          </p>
          <p data-testid="total-field">
            Despesa: 0
          </p>
          <p data-testid="header-currency-field">
            BRL
          </p>
        </header>
        <form>
          { this.metodoPagamento() }
          { this.tipoMoeda() }
          { this.valorDespesa() }
          { this.descricaoDespesa() }
          { this.selecionarCategoria() }
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email });

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
