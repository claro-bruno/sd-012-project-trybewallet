import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Form extends Component {
  render() {
    const { currencies } = this.props;
    const newCurrencies = { ...currencies };
    const payment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const food = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="text" name="valor" id="valor" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select name="moeda" id="moeda">
            {Object.keys(newCurrencies).map((item) => (
              <option key={ item }>{item}</option>
            ))}
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de Pagamento:
          <select name="pagamento" id="pagamento">
            {payment.map((item) => (<option key={ item }>{item}</option>))}
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select name="tag" id="tag">
            {food.map((item) => (<option key={ item }>{item}</option>))}
          </select>
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input type="text" id="descricao" name="descricao" />
        </label>
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Form.propTypes = {
  currencies: PropTypes.shape({
    /* ARS: PropTypes.shape({ code: PropTypes.string.isRequired }),
    AUD: PropTypes.shape({ code: PropTypes.string.isRequired }),
    BTC: PropTypes.shape({ code: PropTypes.string.isRequired }),
    CAD: PropTypes.shape({ code: PropTypes.string.isRequired }),
    CHF: PropTypes.shape({ code: PropTypes.string.isRequired }),
    CNY: PropTypes.shape({ code: PropTypes.string.isRequired }),
    DOGE: PropTypes.shape({ code: PropTypes.string.isRequired }),
    ETH: PropTypes.shape({ code: PropTypes.string.isRequired }),
    EUR: PropTypes.shape({ code: PropTypes.string.isRequired }),
    GBP: PropTypes.shape({ code: PropTypes.string.isRequired }),
    ILS: PropTypes.shape({ code: PropTypes.string.isRequired }),
    JPY: PropTypes.shape({ code: PropTypes.string.isRequired }),
    LTC: PropTypes.shape({ code: PropTypes.string.isRequired }),
    USD: PropTypes.shape({ code: PropTypes.string.isRequired }),
    USDT: PropTypes.shape({ code: PropTypes.string.isRequired }),
    XRP: PropTypes.shape({ code: PropTypes.string.isRequired }), */
  }).isRequired,
};
export default connect(mapStateToProps)(Form);
