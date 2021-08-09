import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleTotal = this.handleTotal.bind(this);
  }

  handleTotal() {
    const { valorTotal } = this.props;
    return valorTotal
      .reduce(
        (acc, ele) => acc
      + (Number(ele.value) * Number(ele.exchangeRates[ele.currency].ask)),
        0,
      );
  }

  render() {
    const { userEmail } = this.props;

    return (
      <div>
        <label htmlFor="email-field">
          Email:
          <span
            type="text"
            id="email-field"
            data-testid="email-field"
            readOnly
          >
            { userEmail }
          </span>
        </label>
        <label htmlFor="total">
          Total:
          <span
            id="total"
            data-testid="total-field"
          >
            { (this.handleTotal()).toFixed(2) }
          </span>
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
Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  valorTotal: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  valorTotal: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
