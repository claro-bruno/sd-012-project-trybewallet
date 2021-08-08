import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Form from '../components/Form';
import Table from '../components/Table';
import { walletSubmit } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchApi } = this.props;
    fetchApi();
  }

  render() {
    return (
      <div className="WalletBody">
        <Header />
        <Form />
        <Table />
      </div>
    );
  }
}

Wallet.propTypes = {
  fetchApi: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchApi: () => dispatch(walletSubmit()),
});

export default connect(null, mapDispatchToProps)(Wallet);
