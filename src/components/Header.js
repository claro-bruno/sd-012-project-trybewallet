import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import trybePath from '../images/trybe.png';

class Header extends Component {
  constructor(props) {
    super(props);

    this.updateValue = this.updateValue.bind(this);

    this.state = {
      totalValue: 0,
      localCurrency: {
        code: 'R$',
        symbol: 'BRL',
      },
    };
  }

  componentDidUpdate(prevProps) {
    const { wallet: { totalValue } } = this.props;
    if (prevProps.wallet.totalValue !== totalValue) {
      this.updateValue();
    }
  }

  updateValue() {
    const { wallet: { totalValue } } = this.props;
    this.setState((prevState) => ({ ...prevState, totalValue }));
  }

  render() {
    const { user: { email } } = this.props;
    const { localCurrency, totalValue } = this.state;

    const formato = { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' };

    return (
      <div className="header-container">
        <img className="wallet-logo" src={ trybePath } alt="trybe" />
        <div className="header-information">
          <span data-testid="email-field">{`Email: ${email}`}</span>
          <div className="total-expenses">
            <span>Despesa Total: </span>
            <span data-testid="total-field">
              { totalValue.toLocaleString('en-US', formato) }
            </span>
            <span data-testid="header-currency-field">{` ${localCurrency.symbol}`}</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ user: state.user, wallet: state.wallet });

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  wallet: PropTypes.shape({
    totalValue: PropTypes.number,
    expenses: PropTypes.arrayOf(PropTypes.shape({
      exchangeRates: PropTypes.shape(),
    })).isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, null)(Header);
