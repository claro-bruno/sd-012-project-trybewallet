import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import trybe from '../images/trybe-logo.png';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      redirectHome: false,
    };
    this.sumTotal = this.sumTotal.bind(this);
  }

  sumTotal() {
    const { expenses } = this.props;
    let soma = 0;
    expenses.forEach(({ value, currency, exchangeRates }) => {
      soma += exchangeRates[currency].ask * value;
    });

    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return formatter.format(soma);
    // return soma.toFixed(2);
  }

  render() {
    const { redirectHome } = this.state;
    if (redirectHome) return <Redirect to="/" />;
    const { email, currency } = this.props;
    return (
      <header className="page-header">
        <div className="logo">
          <img src={ trybe } alt="trybe logo" className="trybe" />
          <h1 className="wallet">wallet</h1>
        </div>
        <div className="column">
          <span>Total: </span>
          <span data-testid="total-field">{ this.sumTotal() }</span>
        </div>
        <div className="column">
          <span>Moeda de conversão: </span>
          <span data-testid="header-currency-field">{ currency }</span>
        </div>
        <div className="email-div">
          <h4 data-testid="email-field">{ email }</h4>
          <button
            type="button"
            onClick={ () => this.setState({ redirectHome: true }) }
            className="btn btn-danger"
          >
            <i className="fas fa-sign-out-alt" />
          </button>
        </div>
      </header>
    );
  }
}

Header.defaultProps = {
  expenses: undefined,
  currency: undefined,
};

Header.propTypes = {
  email: PropTypes.string.isRequired,
  currency: PropTypes.string,
  // total: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  currency: wallet.currency,
  total: wallet.total,
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(Header);
