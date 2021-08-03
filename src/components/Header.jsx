import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const imgPath = 'https://www.abcdacomunicacao.com.br/wp-content/uploads/Trybe_logo-baixa.png';
    const { userStateFromRedux, walletStateFromRedux } = this.props;
    const { email } = userStateFromRedux;
    const { totalExpenses } = walletStateFromRedux;
    const despesas = totalExpenses || 0;

    return (
      <header>
        <div className="headerLeftDiv">
          <img src={ imgPath } alt="trybeLogo" className="headerImg" />
        </div>
        <div className="headerRightDiv">
          <div data-testid="email-field">
            { email }
          </div>
          <div data-testid="total-field">
            <p data-testid="header-currency-field">
              { `Total de despesas: ${despesas.toFixed(2)} BRL` }
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
