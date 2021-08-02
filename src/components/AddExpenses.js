import React from 'react';
import SelectPayment from './SelectPayment';
import ExpenseTag from './ExpenseTag';
import SelectCurrency from './SelectCurrency';
import '../styles/Wallet.css';

class AddExpenses extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }

  render() {
    return (
      <div className="form-container">
        <h2>Adicionar Despesa</h2>
        <form className="add-expenses-form" onSubmit={ (e) => e.preventDefault() }>
          <div className="layer first-row">
            <label htmlFor="description">
              Descrição:
              <input type="text" id="description" />
            </label>
          </div>
          <div className="layer second-row">
            <label htmlFor="value">
              Valor:
              <input type="number" id="value" />
            </label>
            <SelectCurrency />
          </div>
          <div className="layer third-row">
            <SelectPayment />
          </div>
          <div className="layer fourth-row">
            <ExpenseTag />
          </div>
          <button type="submit">Adicionar Despesa</button>
        </form>
      </div>

    );
  }
}

export default AddExpenses;
