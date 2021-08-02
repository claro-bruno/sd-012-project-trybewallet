import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getApiCurrency } from '../actions/index';

class SelectMoedas extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     currencyList: [],
  //   };

  //   this.getApiCurrency = this.getApiCurrency.bind(this);
  // }

  // async getApiCurrency() {
  //   const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  //   const currency = await response.json();
  //   const currencies = Object.keys(currency);
  //   this.setState({
  //     currencyList: currencies,
  //   });
  //   return currencies;
  // }
  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { setCurrency } = this.props;
    setCurrency();
  }

  render() {
    // const { currencyList } = this.state;
    // const currencyFilter = currencyList.filter((USDT) => USDT !== 'USDT');
    console.log(this.props);
    // eslint-disable-next-line react/prop-types
    const { getCurrency } = this.props;
    return (
      <label htmlFor="moedas">
        Moeda
        <select
          name="moedas"
          id="moedas"
        >
          {
            // eslint-disable-next-line react/prop-types
            getCurrency.map((currency) => (
              <option key={ currency }>{ currency }</option>
            ))
          }
        </select>
      </label>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrency: () => dispatch(getApiCurrency()),
});
const mapStateToProps = (state) => ({
  getCurrency: state.wallet.currencies,
});

// fazer um map com as moedas da action
export default connect(mapStateToProps, mapDispatchToProps)(SelectMoedas);
