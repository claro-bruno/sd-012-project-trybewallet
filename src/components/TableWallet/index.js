import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../../actions';

class TableWallet extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target: { id, value } }) {
    if (value === 'editar') {
      console.log('entrou em editar');
    } else {
      const { delExpense } = this.props;
      delExpense(+id);
    }
  }

  renderButtons(id) {
    return (
      <div>
        <button
          type="button"
          onClick={ this.handleClick }
          id={ id }
          data-testid="edit-btn"
          value="editar"
        >
          Editar
        </button>

        <button
          type="button"
          onClick={ this.handleClick }
          id={ id }
          data-testid="delete-btn"
        >
          Deletar
        </button>
      </div>
    );
  }

  // renderDeleteButton(id) {
  //   return (
  //     <button
  //       type="button"
  //       onClick={ this.handleClick }
  //       id={ id }
  //       data-testid="delete-btn"
  //     >
  //       Deletar
  //     </button>
  //   );
  // }

  render() {
    const { getExpensesInfos } = this.props;
    const tableHeaders = ['Descrição', 'Tag', 'Método de pagamento', 'Valor',
      'Moeda', 'Câmbio utilizado', 'Valor convertido',
      'Moeda de conversão', 'Editar/Excluir'];
    return (
      <table>
        <thead>
          <tr>
            { tableHeaders.map((header, index) => <th key={ index }>{ header }</th>) }
          </tr>
        </thead>
        <tbody>
          { getExpensesInfos.map((expense) => {
            const { id, description, tag, method, value, currency, exchangeRates,
            } = expense;

            const currencyName = exchangeRates[currency].name.split('/')[0];
            const currencyValue = parseFloat(exchangeRates[currency].ask);
            const convertedValue = Math
              .floor(currencyValue * parseFloat(value) * 100) / 100;

            const tableData = [description, tag, method, value, currencyName,
              currencyValue.toFixed(2), convertedValue.toFixed(2), 'Real',
              this.renderButtons(id)];
            return (
              <tr key={ id }>
                {tableData.map((data, index) => <td key={ index }>{ data }</td>) }
              </tr>
            );
          }) }
        </tbody>
      </table>
    );
  }
}

TableWallet.propTypes = {
  getExpensesInfos: PropTypes.arrayOf(
    PropTypes.object,
  ),
  delExpense: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  delExpense: (id) => dispatch(deleteExpense(id)),
});

const mapStateToProps = ({ wallet }) => ({
  getExpensesInfos: wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(TableWallet);
