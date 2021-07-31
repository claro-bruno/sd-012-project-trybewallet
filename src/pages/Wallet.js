import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchApi from '../actions/fetchApi';
import ExpenseInput from '../components/ExpenseInput';

class Wallet extends React.Component {
  componentDidMount() {
    const { setFetchApi } = this.props;
    setFetchApi();
  }

  render() {
    const { email } = this.props;

    return (
      <>
        <header>
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">{ `R$${0}`}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <main>
          <ExpenseInput />
        </main>
      </>

    );
  }
}

const mapStateToPrpos = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  setFetchApi: () => dispatch(fetchApi()),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  setFetchApi: PropTypes.func.isRequired,
};

export default connect(mapStateToPrpos, mapDispatchToProps)(Wallet);
