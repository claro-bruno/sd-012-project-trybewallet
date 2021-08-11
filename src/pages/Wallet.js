import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from '../components/ExpenseForm';
import { fetchApi } from '../actions/wallet';
import './styles/Wallet.css';

class Wallet extends React.Component {
  componentDidMount() {
    const { setApi } = this.props;

    setApi();
  }

  render() {
    const { email, currencies } = this.props;

    const currenciesData = Object.keys(currencies)
      .filter((currency) => currency !== 'USDT');

    return (
      <div>
        <header className="header">
          <h1>TRYBE LOGO</h1>
          <p data-testid="email-field">{ email }</p>
          <p>
            Despesa Total: R$
            <span data-testid="total-field">0</span>
            <span data-testid="header-currency-field">BRL</span>
          </p>
        </header>

        <section>
          <ExpenseForm currencies={ currenciesData } />
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  setApi: () => dispatch(fetchApi()),
});

Wallet.propTypes = {
  email: PropTypes.string,
  currencies: PropTypes.arrayOf(Object),
  setApi: PropTypes.func,
}.isrequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
