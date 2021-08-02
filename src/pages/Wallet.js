import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import HeaderWallet from '../components/HeaderWallet';
import FormWallet from '../components/FormWallet';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      total: 0,
      moeda: 'BRL',
      currencies: {},
    };
  }

  componentDidMount() {
    this.getCurrencies();
  }

  async getCurrencies() {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const res = await fetch(url);
    const currencies = await res.json();
    this.setState({
      currencies,
    });
  }

  render() {
    const { email } = this.props;
    const { total, moeda, currencies } = this.state;

    return (
      <>
        <HeaderWallet email={ email } total={ total } moeda={ moeda } />
        <FormWallet
          currencies={ Object.values(currencies)
            .filter(({ codein }) => codein !== 'BRLT') }
        />
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
