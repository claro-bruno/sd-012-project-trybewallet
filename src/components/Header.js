import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, total, currentCurrency } = this.props;
    return(
      <header>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <p data-testid="email-field">Email: { email }</p>
          <p data-testid="total-field">Total: { total }</p>
          <p data-testid="header-currency-field">Moeda: { currentCurrency }</p>  
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

export default connect(mapStateToProps)(Header);