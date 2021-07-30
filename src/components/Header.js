import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, currentCurrency } = this.props;
    return (
      <header>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <p data-testid="email-field">{ `Email: ${email}` }</p>
          <p data-testid="total-field">Valor: 0</p>
          <p data-testid="header-currency-field">{ `Moeda: ${currentCurrency}` }</p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currentCurrency: state.wallet.currentCurrency,
  total: state.wallet.total,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  currentCurrency: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
