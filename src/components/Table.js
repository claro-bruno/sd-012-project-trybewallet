import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from './Button';
import { removeExpense } from '../actions';

class Table extends React.Component {
  renderButton(id) {
    const { remove } = this.props;
    return (
      <Button
        buttonText="Excluir"
        onClick={ () => remove(id) }
        testId="delete-btn"
      />
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
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
        { expenses.map((expense) => {
          const {
            id,
            description,
            tag,
            method,
            value,
            currency,
            exchangeRates,
          } = expense;
          const currencyInitials = currency;
          const currencyName = exchangeRates[currencyInitials].name.split('/')[0];
          const currencyValue = parseFloat(exchangeRates[currencyInitials].ask);
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
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  remove: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  remove: (id) => dispatch(removeExpense(id)),
});

export default connect(null, mapDispatchToProps)(Table);
