import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';
import Header from '../components/Header';
import Form from '../components/Form';

class Wallet extends React.Component {
  componentDidMount() {
    const { setCurrenciesToStore } = this.props;
    setCurrenciesToStore();
  }

  render() {
    return (
      <div>
        <Header />
        <Form />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrenciesToStore: (currencies) => dispatch(fetchCurrencies(currencies)),
});

Wallet.propTypes = {
  setCurrenciesToStore: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
