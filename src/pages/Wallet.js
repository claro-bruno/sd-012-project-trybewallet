import React from 'react';
import Header from '../components/standart/Header';
import InputValor from '../components/WalletControlled/InputValor';
import InputDescricao from '../components/WalletControlled/InputDescricao';

class Wallet extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      expenseAmount: 0,
      descricao: '',
    };
  }

  handleChange({ target: { name, type, value, checked } }) {
    function newValue() {
      switch (type) {
      case 'checkbox': return checked;
      case 'number': return +value;
      default: return value;
      }
    }
    this.setState((state) => ({ ...state, [name]: newValue() }));
  }

  render() {
    const {
      state: { expenseAmount, descricao },
      handleChange,
    } = this;

    return (
      <>
        <Header />
        <form>
          <InputValor
            value={ expenseAmount }
            handleChange={ handleChange }
          />
          <InputDescricao
            value={ descricao }
            handleChange={ handleChange }
          />
        </form>
      </>

    );
  }
}

export default Wallet;
