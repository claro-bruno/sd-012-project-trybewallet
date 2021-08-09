import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TableBody extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <tbody>
        {expenses.map((custo, index) => {
          const total = Number(custo.exchangeRates[custo.currency].ask) * custo.value;
          const cambioUtilizado = custo.exchangeRates[custo.currency].ask;
          return (
            <tr key={ index }>
              <td>{ custo.description }</td>
              <td>{ custo.tag }</td>
              <td>{ custo.method }</td>
              <td>{ custo.value }</td>
              <td>{ custo.exchangeRates[custo.currency].name }</td>
              <td>{ Number(cambioUtilizado).toFixed(2) }</td>
              <td>{ total }</td>
              <td>Real</td>
              <td><button data-testid="edit-btn" type="button">editar</button></td>
              <td><button data-testid="delete-btn" type="button">excluir</button></td>
            </tr>
          );
        })}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

TableBody.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(TableBody);
