import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { expenses, email } = this.props;
    return (
      <header>
        <h1>MyWallet</h1>
        <div>
          <p data-testid="email-field">{`Email: ${email}`}</p>
          <p data-testid="total-field">
            {`Dispesas Total: 0 ${expenses}`}
            <span data-testid="header-currency-field">BRL</span>
          </p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
