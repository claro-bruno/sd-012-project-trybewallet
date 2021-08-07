import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
    };
  }

  render() {
    const { total } = this.state;
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
Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

export default connect(mapStateToProps)(Header);
