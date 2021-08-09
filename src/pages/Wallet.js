import React from 'react';
import Header from '../components/Header';
import AddExpense from '../components/AddExpense';
import Table from '../components/Table';
import EditExpense from '../components/EditExpense';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      edit: false,
      id: '',
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.finishEdit = this.finishEdit.bind(this);
  }

  handleEdit(itemId) {
    this.setState({ edit: true, id: itemId });
  }

  finishEdit() {
    this.setState({ edit: false, id: '' });
  }

  render() {
    const { edit, id } = this.state;

    return (
      <>
        <Header />
        { !edit && <AddExpense />}
        { edit && <EditExpense id={ id } onClick={ this.finishEdit } />}
        <Table onClick={ this.handleEdit } />
      </>
    );
  }
}

export default Wallet;
