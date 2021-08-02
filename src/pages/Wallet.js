import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import FormAddExpense from '../components/FormAddExpense';
import { fetchAPI } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      expense: {
        id: 0,
        value: 0,
        currency: '',
        method: '',
        tag: '',
        description: '',
        exchangeRates: 0,
      },
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email } = this.props;
    const { expense } = this.state;

    return (
      <main>
        <div>TrybeWallet</div>
        <Header email={ email } />
        <FormAddExpense handleChange={ this.handleChange } expense={ expense } />
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.user.email,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCurrencies() { dispatch(fetchAPI()); },
  };
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
