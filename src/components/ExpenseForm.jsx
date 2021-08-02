import React from 'react';

const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

// prettier-ignore
class ExpenseForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="amount-input">
          Valor:
          <input type="text" id="amount-input" className="form__field" />
        </label>
        <label htmlFor="description-input">
          Descrição:
          <input type="text" id="description-input" className="form__field" />
        </label>
        <label htmlFor="currency-input">
          Moeda:
          <select id="currency-input" className="form__field">
            <option>USD</option>
          </select>
        </label>
        <label htmlFor="method-input">
          Método de pagamento:
          <select id="method-input" className="form__field">
            {paymentMethods.map((method) => (
              <option key={ method }>{method}</option>
            ))}
          </select>
        </label>
        <label htmlFor="method-input">
          Tag:
          <select
            data-testid="method-input"
            id="method-input"
            className="form__field"
          >
            {tags.map((tag) => (
              <option key={ tag }>{tag}</option>
            ))}
          </select>
        </label>
      </form>
    );
  }
}

export default ExpenseForm;
