import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrencies } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  render() {
    const { email, currencies } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">{ email }</span>
          <span data-testid="total-field">{ 0 }</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <form>
          <label htmlFor="valor">
            Valor
            <input name="valor" id="valor" type="text" />
          </label>
          <label htmlFor="descricao">
            Descrição
            <input name="descricao" id="descricao" type="text" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select name="moeda" id="moeda">
              {currencies.filter((currency) => currency !== 'USDT')
                .map((currency, index) => (
                  <option key={ index } value={ currency }>{ currency }</option>
                ))}
            </select>
          </label>
          <label htmlFor="metodo-pagamento">
            Método de pagamento
            <select name="metodo-pagamento" id="metodo-pagamento">
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="categoria-despesa">
            Tag
            <select name="categoria-despesa" id="categoria-despesa">
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saúde">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(getCurrencies()),
});

Wallet.propTypes = {
  fetchCurrencies: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
