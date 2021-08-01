import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();
    this.total = this.total.bind(this);
  }

  total() { // by Rodrigo Merlone https://github.com/tryber/sd-012-project-trybewallet/blob/rodrigo-merlone-trybewallet/src/components/Header.jsx
    const { expenses } = this.props;
    let soma = 0;
    expenses.forEach(({ value, currency, exchangeRates }) => {
      soma += exchangeRates[currency].ask * value;
    });
    return soma.toFixed(2);
  }

  render() {
    const { user } = this.props;
    return (
      <header className="header">
        <div className="header-things"><p>Trybe</p></div>
        <div className="header-things">
          <div data-testid="email-field">
            Email:
            { user.email }
          </div>
          <div className="moneyº-º">
            <div data-testid="total-field">
              Despesa Total:
              { this.total() }
            </div>
            <div data-testid="header-currency-field">BRL</div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  user: PropTypes.objectOf(Object).isRequired,
  expenses: PropTypes.arrayOf(Array).isRequired,
};
