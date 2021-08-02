import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getCurrencyApi from '../../data/data';
// import { walletAction } from '../../actions/index';

class BodyWallet extends React.Component {
  componentDidMount() {
    const { fetchCurrency } = this.props;
    fetchCurrency();
  }

  render() {
    const { currencies } = this.props;
    // console.log(this.state);
    // console.log(this.props);
    return (
      <form>
        <label htmlFor="expense-value">
          Valor
          <input type="text" id="expense-value" />
        </label>
        <label htmlFor="select-currency">
          Moeda
          <select id="select-currency">
            {
              currencies.map((currency) => <option key={ currency }>{ currency }</option>)
            }
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento
          <select id="payment-method">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="jonas">
          Tag:
          <select name="jonas" id="jonas">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <label htmlFor="input-descript">
          Descrição:
          <input
            type="text"
            name="input-descript"
            id="input-descript"
          />
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: (currency) => dispatch(getCurrencyApi(currency)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BodyWallet);

BodyWallet.propTypes = {
  fetchCurrency: PropTypes.func,
  currencies: PropTypes.arrayOf(PropTypes.string),
}.isRequired;
