import React from 'react';
import AddForm from '../components/AddForm';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <AddForm />
      </div>
    );
  }
}

export default Wallet;
