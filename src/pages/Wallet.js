import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import ExpensesForm from '../components/ExpensesForm';
import ExpensesTable from '../components/ExpensesTable';
import EditForm from '../components/EditForm';

class Wallet extends React.Component {
  render() {
    const { status } = this.props;
    return (
      <div>
        <Header />
        {status === 'add' && <ExpensesForm />}
        {status === 'edit' && <EditForm />}
        <ExpensesTable />
      </div>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  status: wallet.status,
});

export default connect(mapStateToProps)(Wallet);
