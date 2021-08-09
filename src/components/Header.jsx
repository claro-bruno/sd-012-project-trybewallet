import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();
    this.sumOfExpenses = this.sumOfExpenses.bind(this);
  }

  sumOfExpenses() {
    const { walletStateFromRedux } = this.props;
    const zero = '0';
    if (walletStateFromRedux) {
      const { expenses } = walletStateFromRedux;
      if (expenses) {
        let total = 0;
        for (let index = 0; index < expenses.length; index += 1) {
          const value = expenses[index].value
            ? expenses[index].value
              * expenses[index].exchangeRates[expenses[index].currency].ask
            : 0;
          total += value;
        }
        return total.toFixed(2);
      }
      return zero;
    }
    return zero;
  }

  render() {
    const imgPath = 'https://www.abcdacomunicacao.com.br/wp-content/uploads/Trybe_logo-baixa.png';
    const { userStateFromRedux } = this.props;
    const { email } = userStateFromRedux;
    const texto1 = 'Total de despesas: ';
    const texto2 = 'BRL';

    return (
      <header>
        <div className="headerLeftDiv">
          <img src={ imgPath } alt="trybeLogo" className="headerImg" />
        </div>
        <div className="headerRightDiv">
          <div data-testid="email-field">
            { email }
          </div>
          <div data-testid="header-currency-field">
            <p>
              { texto1 }
              <span data-testid="total-field">{ this.sumOfExpenses() }</span>
              { texto2 }
            </p>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userStateFromRedux: state.user,
  walletStateFromRedux: state.wallet,
});

Header.propTypes = {
  userStateFromRedux: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  walletStateFromRedux: PropTypes.shape({
    currencies: PropTypes.arrayOf(PropTypes.string),
    expenses: PropTypes.arrayOf(PropTypes.object),
    totalExpenses: PropTypes.number,
  }).isRequired,
};

export default connect(mapStateToProps, null)(Header);
