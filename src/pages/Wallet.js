import React from 'react';
import Header from '../Components/Header';
import FormWallet from '../Components/FormWallet';

class Wallet extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: 0,
      description: '',
      currency: '',
      payment: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState((state) => ({
      ...state,
      [name]: value,
    }));
  }

  render() {
    const { value, description, currency, payment, tag } = this.state;
    return (
      <main>
        <Header />
        <FormWallet
          value={ value }
          description={ description }
          currency={ currency }
          payment={ payment }
          tag={ tag }
          handleChange={ this.handleChange }
        />
      </main>
    );
  }
}

export default Wallet;
