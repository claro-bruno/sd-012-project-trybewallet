import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Form from '../components/Form';
import Header from '../components/Header';
import { fetchAPI } from '../actions/index';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalExpenses: 0,
    };
    this.getTotal = this.getTotal.bind(this);
  }

  componentDidMount() {
    const { submitCurrencies } = this.props;
    submitCurrencies();
  }

  getTotal(maney) {
    const { totalExpenses } = this.state;
    const value = +maney;
    this.setState({ totalExpenses: (totalExpenses + value) });
  }

  render() {
    const { totalExpenses } = this.state;
    const { user } = this.props;

    return (
      <div>
        <Header
          email={ user.email }
          totalExpenses={ totalExpenses }
        />
        <Form
          getTotal={ this.getTotal }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  submitCurrencies: () => dispatch(fetchAPI()),
});

Wallet.propTypes = {
  submitCurrencies: PropTypes.func.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
