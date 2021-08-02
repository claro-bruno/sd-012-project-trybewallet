import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import FormAddExpense from '../components/FormAddExpense';
import currencyAPI from '../services/currencyAPI';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
    };
    this.fetchAPI = this.fetchAPI.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const { currencies } = this.state;
    const result = await currencyAPI();
    const currencyNames = Object.keys(result);
    this.setState({
      currencies: [...currencies, ...currencyNames],
    });
  }

  render() {
    const { email } = this.props;
    const { currencies } = this.state;

    return (
      <main>
        <div>TrybeWallet</div>
        <Header email={ email } />
        <FormAddExpense currencies={ currencies } />
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.user.email,
  };
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
