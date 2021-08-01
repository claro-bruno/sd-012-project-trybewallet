import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SelectPayment from '../components/SelectPayment';
import ExpenseTag from '../components/ExpenseTag';
import SelectCurrency from '../components/SelectCurrency';
import wallet from '../images/wallet.png';
import '../styles/Wallet.css';

class Wallet extends React.Component {
  render() {
    const { userMail } = this.props;
    let { totalExpenses } = this.props;
    if (totalExpenses > 0) {
      totalExpenses.reduce((acc, init) => init + acc);
    } else {
      totalExpenses = 0;
    }
    return (
      <>
        <header className="wallet-header">
          <div className="logo-container">
            <img src={ wallet } alt="" />
            <h1>Trybewallet</h1>
          </div>
          <span data-testid="email-field">
            {userMail}
          </span>
          <div className="info-container">
            <span data-testid="total-field">{totalExpenses}</span>
            <span data-testid="header-currency-field">BRL</span>
          </div>
        </header>
        <form action="" onSubmit={ (e) => e.preventDefault() }>
          <div className="add=expenses-container">
            <label htmlFor="value">
              Valor:
              <input type="text" id="value" />
            </label>
            <label htmlFor="description">
              Descrição:
              <input type="text" id="description" />
            </label>
            <SelectCurrency />
            <SelectPayment />
            <ExpenseTag />
            <button type="submit">Adicionar Despesa</button>
          </div>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userMail: state.user.email,
  totalExpenses: state.wallet.expenses,
});

const mapDispatchToProps = () => ({

});

Wallet.propTypes = {
  userMail: PropTypes.string,
  totalExpenses: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
