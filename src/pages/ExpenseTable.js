import React, { Component } from 'react';

class ExpenseTable extends Component {
  render() {
    const colHeaders = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
      'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    return (
      <table>
        <thead>
          <tr>
            { colHeaders
              .map((colH) => <th key={ colH }>{ colH }</th>)}
          </tr>
        </thead>
      </table>
    );
  }
}

export default ExpenseTable;
