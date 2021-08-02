import React from 'react';
import SelectPayment from './SelectPayment';
import ExpenseTag from './ExpenseTag';
import SelectCurrency from './SelectCurrency';
import '../styles/AddExpenses.css';

class AddExpenses extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: [],
    };
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { id, value, description, currency, method, tag, exchangeRates } = this.state;
    return (
      <div className="form-container">
        <h2>Adicionar Despesa</h2>
        <form className="add-expenses-form" onSubmit={ (e) => e.preventDefault() }>
          <div className="layer first-row">
            <label htmlFor="description">
              Descrição:
              <input
                name="description"
                type="text"
                id="description"
                value={ description }
              />
            </label>
          </div>
          <div className="layer second-row">
            <label htmlFor="value">
              Valor:
              <input name="value" type="number" id="value" value={ value } />
            </label>
            <SelectCurrency
              currencyValue={ currency }
              handleChange={ this.handleChange }
            />
          </div>
          <div className="layer third-row">
            <SelectPayment
              method={method}
              handleChange={this.handleChange}
            />
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
