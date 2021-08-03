import React from 'react';
import HeaderComponent from '../components/HeaderComponents';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseTable from '../components/ExpenseTable';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currencies: [],
    };
  }

  render() {
    const { currencies } = this.state;
    return (
      <div>
        <HeaderComponent />
        <ExpenseForm currencies={ currencies } />
        <ExpenseTable />
      </div>
    );
  }
}

export default Wallet;
