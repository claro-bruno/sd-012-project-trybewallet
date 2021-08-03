import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import './Wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <Form />
      </main>
    );
  }
}

export default Wallet;
