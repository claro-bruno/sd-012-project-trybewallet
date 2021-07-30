import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SelectPayment from '../components/SelectPayment';
import ExpenseTag from '../components/ExpenseTag';
import SelectCurrency from '../components/SelectCurrency';

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
        <header>
          <span data-testid="email-field">{userMail}</span>
          <span data-testid="total-field">{totalExpenses}</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <main>
          <form action="" onSubmit={ (e) => e.preventDefault() }>
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
          </form>
        </main>
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
