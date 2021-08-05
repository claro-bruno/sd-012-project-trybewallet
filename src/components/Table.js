import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const heads = [
  'Descrição', 'Tag', 'Método de pagamento',
  'Valor', 'Moeda', 'Câmbio utilizado',
  'Valor convertido', 'Moeda de conversão', 'Editar/Excluir',
];
class Table extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            {heads.map((head) => <th key={ head }>{head}</th>)}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => {
            const { id, currency, description,
              tag, method, value, exchangeRates } = expense;
            return (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{value}</td>
                <td>{(exchangeRates[currency].name).split('/')[0]}</td>
                <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                <td>{Number(exchangeRates[currency].ask * value).toFixed(2)}</td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="edit-btn"
                    name="edit"
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    name="delete"
                    data-testid="delete-btn"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Table);
