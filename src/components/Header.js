import React, { Component } from 'react';


class Header extends Component {
  constructor(props) {
    super(props);
    const { userEmail } = this.props;
    this.state = {
      email: userEmail,
      total: 0,
      cambio: '',
    };
  }

  render() {
    const { email, total, cambio } = this.state;
    return (
      <div>
        <label htmlFor="email-field">
          Email:
          <input
            type="text"
            id="email-field"
            data-testid="email-field"
            readOnly
            value={ email }
          />
        </label>
        <label htmlFor="total">
          Total:
          <input
            type="text"
            id="total"
            data-testid="total-field"
            value={ total }
            readOnly
          />
        </label>
        <label htmlFor="exchange">
          Exchange:
          <input
            type="text"
            id="exchange"
            data-testid="header-currency-field"
            value={ cambio }
            readOnly
          />
        </label>
      </div>
    );
  }
}

export default Header;
