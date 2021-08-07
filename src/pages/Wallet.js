import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Form from '../components/Form';
import Table from '../components/Table';
import { userLogin } from '../actions';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  wallet: (payload) => dispatch(userLogin(payload)),
});

export default connect(null, mapDispatchToProps)(Wallet);
