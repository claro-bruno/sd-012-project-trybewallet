import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      total: 0,
    };
    this.handleEmail = this.handleEmail.bind(this);
  }

  componentDidMount() {
    this.handleEmail();
  }

  handleEmail() {
    const email = localStorage.getItem('email');
    this.setState({ email });
  }

  render() {
    const { email, total } = this.state;

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
            value="BRL"
            readOnly
          />
        </label>
      </div>
    );
  }
}

export default Header;
