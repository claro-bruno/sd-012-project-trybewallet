import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <div className="table-container">
        <div className="table-header">
          <span className="collumn-title">Descrição</span>
          <span className="collumn-title">Tag</span>
          <span className="collumn-title">Método de Pagamento</span>
          <span className="collumn-title">Valor</span>
          <span className="collumn-title">Moeda</span>
          <span className="collumn-title">Câmbio utilizado</span>
          <span className="collumn-title">Valor Convertido</span>
          <span className="collumn-title">Moeda de conversão</span>
          <span className="collumn-title">Editar/Excluir</span>
        </div>
      </div>
    );
  }
}

export default Table;
