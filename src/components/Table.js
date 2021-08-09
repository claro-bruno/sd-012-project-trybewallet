import React, { Component } from 'react';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  handleRow() {
    const rowState = [
      {
        id: '',
        value: '',
        currency: '',
        method: '',
        tag: '',
        description: '',
      },
    ];
    return (
      <table>
        <tr>
          <td>{rowState.id}</td>
          <td>{rowState.value}</td>
          <td>{rowState.currency}</td>
          <td>{rowState.method}</td>
          <td>{rowState.tag}</td>
          <td>{rowState.description}</td>
        </tr>
      </table>
    );
  }

  render() {
    return (
      <table>
        <tr>
          <th>Id </th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Método</th>
          <th>Tag</th>
          <th>Descrição</th>
        </tr>
      </table>
    );
  }
}
export default Table;
