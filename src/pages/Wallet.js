import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputValue from './walletComp/InputValue';
import InputDescription from './walletComp/InputDescription';
import InputMoney from './walletComp/InputMoney';
import InputPayment from './walletComp/InputPayment';
import InputTag from './walletComp/InputTag';

class Wallet extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div className="wallet-screen">
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
                { 0 }
              </div>
              <div data-testid="header-currency-field">BRL</div>
            </div>
          </div>
        </header>
        <div>
          <form>
            <InputValue />
            <InputDescription />
            <InputMoney />
            <InputPayment />
            <InputTag />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(Wallet);

Wallet.propTypes = {
  user: PropTypes.objectOf(Object).isRequired,
};
