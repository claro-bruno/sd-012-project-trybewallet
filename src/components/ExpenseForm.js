import React from 'react';

class ExpenseForm extends React.Component {
  render() {
    return (
      <section>
        <form id="xpenc-form">
          <label htmlFor="xpenc-form">
            Valor
            <input type="text" name="valor" />
          </label>
          <label htmlFor="xpenc-form">
            Descrição
            <input type="text" name="descricao" />
          </label>
          <label htmlFor="xpenc-form">
            Moeda
            <select>
              <option value="BRL">BRL</option>
            </select>
          </label>
          <label htmlFor="xpenc-form">
            Método de pagamento
            <select>
              <option value="dinheiro">Dinheiro</option>
            </select>
          </label>
          <label htmlFor="xpenc-form">
            Tag
            <select>
              <option value="alimentacao">Alimentação</option>
            </select>
          </label>
        </form>
      </section>
    );
  }
}

export default ExpenseForm;
