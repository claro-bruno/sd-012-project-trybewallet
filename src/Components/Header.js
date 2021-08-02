import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <label for="email-field">
          Email:
          <input type="text" id="email-field" data-testid="email-field">
            'aguem@alguem.com'
          </input>
        </label>
        <label for="total">
          Total:
          <input type="text" id="total" data-testid="total-field">
            0
          </input>
        </label>
        <label for="exchange">
          Exchange: 
          <input type="text" id="exchange"  data-testid="header-currency-field">
            BRL
          </input>
        </label>
      </div>
    );
  }
}


export default Header;
