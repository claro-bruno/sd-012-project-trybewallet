import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import HeaderWallet from '../components/HeaderWallet';
import FormWallet from '../components/FormWallet';
import { fetchAPI } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      total: 0,
      currency: 'BRL',
    };

    this.addValue = this.addValue.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  addValue(value) {
    this.setState((prevState) => ({
      ...prevState,
      total: prevState.total + Number(value),
    }));
  }

  render() {
    const { email } = this.props;
    const { total, currency } = this.state;

    return (
      <>
        <HeaderWallet email={ email } total={ total } moeda={ currency } />
        <main className="bg-secondary pt-2 pb-3 text-light">
          <FormWallet addValue={ this.addValue } />
        </main>
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
