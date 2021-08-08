import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCoins } from '../actions';

class WalletForm extends React.Component {
  constructor() {
    super();

    this.state = {
      currency: '',
    };

    this.getCurrency = this.getCurrency.bind(this);
  }

  componentDidMount() {
    this.getCurrency();
  }

  async getCurrency() {
    const { coinsApi } = this.props;
    await coinsApi();
    const { wallet } = this.props;
    const currency = Object.keys(wallet);
    const formattedCurrency = currency.filter((item) => item !== 'USDT');
    this.setState({
      currency: formattedCurrency,
    });
  }

  render() {
    const { currency } = this.state;
    return (
      <form>
        <label htmlFor="preco">
          Valor
          <input id="preco" type="number" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            { currency.length ? currency
              .map((item) => <option key={ item }>{ item }</option>) : '' }
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select id="pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <label htmlFor="descricao">
          Descrição
          <input id="descricao" type="text" />
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  wallet: state.wallet.wallet,
});

WalletForm.propTypes = {
  coinsApi: PropTypes.func.isRequired,
  wallet: PropTypes.shape.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  coinsApi: (state) => dispatch(getCoins(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
