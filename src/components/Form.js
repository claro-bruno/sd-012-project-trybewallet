import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Currency from './Currency';
import LabelSelect from './LabelSelect';
import LabelInput from './LabelInput';
import { formWallet } from '../actions';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
    this.getCrurrencies = this.getCrurrencies.bind(this);
    this.inputValue = this.inputValue.bind(this);
    this.submitStore = this.submitStore.bind(this);
  }

  getCrurrencies() {
    const { currencies } = this.props;
    const newCurrencies = { ...currencies };
    delete newCurrencies.USDT;
    const a = { nenhum: '', ...newCurrencies };
    return a;
  }

  inputValue(e) {
    switch (e.target.name) {
    case 'Valor': this.setState({ value: e.target.value });
      break;
    case 'Pagamento': this.setState({ method: e.target.value });
      break;
    case 'Moeda': this.setState({ currency: e.target.value });
      break;
    case 'Tag': this.setState({ tag: e.target.value });
      break;
    case 'Descrição': this.setState({ description: e.target.value });
      break;
    default:
    }
    const { currencies } = this.props;
    const arrayKeys = { ...currencies };
    delete arrayKeys.USDT;
    const keys = [...Object.keys(arrayKeys)];
    const Obj = Object.entries(arrayKeys).map((item, index) => ({
      [keys[index]]: {
        code: item[1].name,
        name: item[1].code,
        ask: item[1].ask,
      },
    }));
    const newObj = {
      ...Obj[0],
      ...Obj[1],
      ...Obj[2],
      ...Obj[3],
      ...Obj[4],
      ...Obj[5],
      ...Obj[6],
      ...Obj[7],
      ...Obj[8],
      ...Obj[9],
      ...Obj[10],
      ...Obj[11],
      ...Obj[12],
      ...Obj[13],
      ...Obj[14],
    };
    this.setState({ exchangeRates: { ...newObj } });
  }

  submitStore() {
    const { id, value, description, currency,
      method, tag, exchangeRates } = this.state;

    const { getTotal } = this.props;
    const price = [...Object.values(exchangeRates)
      .filter((item) => item.name === currency)];
    console.log(price);
    const priceFinish = (value * price[0].ask).toFixed(2);

    getTotal(priceFinish);

    const { submit } = this.props;
    submit({
      id,
      value: (+value),
      description,
      currency,
      method,
      tag,
      exchangeRates,
    });
    this.setState({ id: (id + 1) });
  }

  render() {
    const { currencies } = this.props;
    const newCurrencies = { ...currencies };
    delete newCurrencies.USDT;
    const payment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const food = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>
        <LabelInput
          htmlFor="Valor"
          type="text"
          nome="Valor"
          id="Valor"
          onChange={ this.inputValue }
        />
        <Currency
          htmlFor="Moeda"
          nome="Moeda"
          id="Moeda"
          array={ newCurrencies }
          onChange={ this.inputValue }
        />
        <LabelSelect
          htmlFor="Pagamento"
          nome="método de pagamento"
          id="Pagamento"
          array={ payment }
          target={ this.inputValue }
        />
        <LabelSelect
          htmlFor="Tag"
          nome="Tag"
          id="Tag"
          array={ food }
          target={ this.inputValue }
        />
        <LabelInput
          htmlFor="Descrição"
          type="text"
          nome="Descrição"
          id="Descrição"
          onChange={ this.inputValue }
        />
        <button type="button" onClick={ this.submitStore }>adicionar despesa</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispathc) => ({
  submit: (state) => dispathc(formWallet(state)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  /* currencies: PropTypes.shape({
    ARS: PropTypes.shape({ code: PropTypes.string.isRequired }),
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
    XRP: PropTypes.shape({ code: PropTypes.string.isRequired }),
  }).isRequired, */
  submit: PropTypes.func.isRequired,
  getTotal: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
