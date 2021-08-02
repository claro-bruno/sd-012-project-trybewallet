import React from 'react';
import PropTypes from 'prop-types';

class Currencies extends React.Component {
  render() {
    const currencies = ['USD', 'CAD', 'EUR', 'GBP', 'ARS', 'BTC', 'LTC',
      'JPY', 'CHF', 'AUD', 'CNY', 'ILS', 'ETH', 'XRP'];
    return (
      <div role="combobox" aria-controls="listbox1" aria-expanded="false">
        Moedas
        <select data-testid="header-currency-field">
          <option defaultValue>BRL</option>
          { currencies
            .map((currency) => <option key={ currency }>{ currency }</option>)}
        </select>
      </div>
    );
  }
}

Currencies.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default Currencies;
