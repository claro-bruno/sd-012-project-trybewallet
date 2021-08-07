import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      totalExpenses: 0,
    };
  }

  render() {
    const { email } = this.props;
    const { totalExpenses } = this.state;

    return (
      <header>
        <spam data-testid="email-field">
          Email:
          { email }
        </spam>
        <spam data-testid="total-field">
          Despesa Total:
          { totalExpenses }
        </spam>
        <spam data-testid="header-currency-field">
          BRL
        </spam>
      </header>
    );
  }
}

const mapDispathToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: propTypes.string.isRequired,
};

export default connect(mapDispathToProps)(Header);
