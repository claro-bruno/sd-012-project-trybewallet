import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../../actions';

class TableWallet extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target: { id } }) {
    const { delExpense } = this.props;
    delExpense(+id);
  }

  renderButton(id) {
    return (
      <button
        type="button"
        onClick={ this.handleClick }
        id={ id }
        data-testid="delete-btn"
      >
        Deletar
      </button>
    );
  }

  render() {
    const { getExpensesInfos } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
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
            return (
              <tr key={ id }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ `${value}` }</td>
                <td>{ currencyName }</td>
                <td>{ currencyValue.toFixed(2) }</td>
                <td>{ convertedValue.toFixed(2) }</td>
                <td>Real</td>
                <td>{ this.renderButton(id) }</td>
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
