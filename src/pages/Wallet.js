import React from 'react';
import { connect } from 'react-redux';
import AddForm from '../components/AddForm';
import Header from '../components/Header';
import ExpensesTable from '../components/ExpensesTable';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <AddForm />
        <ExpensesTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
