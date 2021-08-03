import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props)
    const { reduxEmail } = this.props;
    this.state = {
      email: reduxEmail,
      total: 0,
      cambio: '',
    }
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
            value={email}
          />
        </label>
        <label htmlFor="total">
          Total:
          <input
            type="text"
            id="total"
            data-testid="total-field"
            value={total}
            readOnly
          />
        </label>
        <label htmlFor="exchange">
          Exchange:
          <input
            type="text"
            id="exchange"
            data-testid="header-currency-field"
            value={cambio}
            readOnly
          />
        </label>
      </div>
    );
  }
}

Header.propTypes = {
  reduxEmail: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  reduxEmail: state.user.email});

export default connect(mapStateToProps)(Header);
