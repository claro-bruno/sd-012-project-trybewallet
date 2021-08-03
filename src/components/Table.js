import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from './Button';
import { removeExpense, editExpense } from '../actions';

class Table extends React.Component {
  renderButtons(id) {
    const { remove, edit } = this.props;
    return (
      <div>
        <Button
          buttonText="Editar"
          onClick={ () => edit(id) }
          testId="edit-btn"
        />
        <Button
          buttonText="Excluir"
          onClick={ () => remove(id) }
          testId="delete-btn"
        />
      </div>
    );
  }

  renderHead() {
    return (
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
    );
  }

  renderBody(expense) {
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
      <tbody key={ id }>
        <tr>
          <td>{ description }</td>
          <td>{ tag }</td>
          <td>{ method }</td>
          <td>{ `${value}` }</td>
          <td>{ currencyName }</td>
          <td>{ currencyValue.toFixed(2) }</td>
          <td>{ convertedValue.toFixed(2) }</td>
          <td>Real</td>
          <td>{ this.renderButtons(id) }</td>
        </tr>
      </tbody>
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        { this.renderHead() }
        { expenses.map((expense) => this.renderBody(expense)) }
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  remove: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  remove: (id) => dispatch(removeExpense(id)),
  edit: (id) => dispatch(editExpense(id)),
});

export default connect(null, mapDispatchToProps)(Table);
