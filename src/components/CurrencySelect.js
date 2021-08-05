import React from 'react';
import PropTypes from 'prop-types';

class CurrencySelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
    };
    this.fetchApi = this.fetchApi.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const apiList = await fetch('https://economia.awesomeapi.com.br/json/all');
    const a = await apiList.json();
    const currencies = Object.keys(a);
    const currenciesFiltered = currencies.filter((currency) => currency !== 'USDT');
    this.setState({
      currencies: currenciesFiltered,
    });
  }

  render() {
    const { currencies } = this.state;
    const { handleChange } = this.props;
    return (
      <label className="ml-1" htmlFor="currency">
        Moeda:
        <select onChange={ handleChange } name="currency" id="currency">
          { currencies
            .map((c) => <option key={ c }>{ c }</option>) }
        </select>
      </label>
    );
  }
}

CurrencySelect.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default CurrencySelect;
