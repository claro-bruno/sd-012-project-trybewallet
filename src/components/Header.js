import React, { Component } from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <section>
        <h3 data-testid="email-field">{ email }</h3>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: string.isRequired,
};

export default connect(mapStateToProps)(Header);
