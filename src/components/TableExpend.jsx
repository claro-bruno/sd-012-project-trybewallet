import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function TableExpend(props) {
  const { expenses } = props;
  const tableThead = [
    'Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda', 'Câmbio utilizado',
    'Valor convertido', ' Moeda de conversão', 'Editar/Excluir',
  ];
  return (
    <table className="table">
      <thead>
        <tr>
          { tableThead.map((head) => <th scope="col" key={ head }>{ head }</th>)}
        </tr>
      </thead>
      <tbody>
        { expenses.map((expense) => {
          const { description,
            tag, method, value, currency, id, exchangeRates } = expense;
          const { name, ask } = exchangeRates[currency];
          const realName = name.split('/');
          const newAsk = parseFloat(ask).toFixed(2);
          const coversao = (value * ask).toFixed(2);
          return (
            <tr key={ id }>
              <td>{ description }</td>
              <td>{ tag }</td>
              <td>{ method }</td>
              <td>{ value }</td>
              <td>{ realName[0] }</td>
              <td>{ newAsk }</td>
              <td>{ coversao }</td>
              <td>Real</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(TableExpend);

TableExpend.propTypes = {
  expenses: PropTypes.array,
}.isRequired;
