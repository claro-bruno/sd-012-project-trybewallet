import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddExpenseForm from '../component/AddExpenseForm';
import { getCurrency } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const { currency } = this.props;
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    currency(data);
  }

  render() {
    const { email, currencies } = this.props;
    return (
      <>
        <header>
          <span data-testid="email-field">{`Email: ${email}`}</span>
          <span data-testid="total-field">{`Despesa Total: R$ ${0}`}</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <AddExpenseForm currencies={ currencies } />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  currency: (data) => dispatch(getCurrency(data)),
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
