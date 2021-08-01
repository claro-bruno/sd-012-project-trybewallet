import React from 'react';

export default class Table extends React.Component {
  render() {
    return (
      <div className="table-div">
        <div>
          Descrição
          <div>Gasto com a sua mae</div>
        </div>
        <div>
          Tag
          <div>Lazer</div>
        </div>
        <div>
          Método de pagamento
          <div>Dinheiro</div>
        </div>
        <div>
          Valor
          <div>U$20,00</div>
        </div>
        <div>
          Moeda
          <div>Dolar comercial</div>
        </div>
        <div>
          Câmbio utilizado
          <div>R$5,61</div>
        </div>
        <div>
          Valor convertido
          <div>R$112,20</div>
        </div>
        <div>
          Moeda de converção
          <div>Real brasileiro</div>
        </div>
        <div className="table-element">
          Editar/Excluir
          <div>
            <button type="button">Edit</button>
            <button type="button">X</button>
          </div>
        </div>
      </div>
    );
  }
}
