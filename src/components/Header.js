import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import trybePath from '../images/trybe.png';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      localCurrency: {
        code: 'R$',
        symbol: 'BRL',
      },
    };
  }

  render() {
    const { user: { email }, wallet: { totalValue } } = this.props;
    const { localCurrency } = this.state;
    console.log(totalValue);
    // const formato = { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' };
    // console.log(totalValue.toLocaleString('pt-BR', formato));
    return (
      <div className="header-container">
        <img className="wallet-logo" src={ trybePath } alt="trybe" />
        <div className="header-information">
          <span data-testid="email-field">{`Email: ${email}`}</span>
          <div className="total-expenses">
            <span>Despesa Total: </span>
            <span data-testid="total-field">
              {/* { totalValue.toLocaleString('pt-BR', formato) } */}
              {/* {` ${totalValue.toFixed(2)} `} */}
              {`${totalValue}`}
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
