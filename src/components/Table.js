import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from './Button';

class Table extends React.Component {
  render() {
    const { expenses } = this.props;
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
          {
            expenses.map(
              ({ id, description, tag, method, value, currency, exchangeRates }) => (
                <tr key={ id }>
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>{value}</td>
                  <td>{exchangeRates[currency].name.replace('/Real Brasileiro', '')}</td>
                  <td>{(exchangeRates[currency].ask * 1).toFixed(2)}</td>
                  <td>{(value * exchangeRates[currency].ask).toFixed(2)}</td>
                  <td>Real</td>
                  <td>
                    <Button itemName="Editar" />
                    <Button testId="delete-btn" itemName="Excluir" />
                  </td>
                </tr>
              ),
            )
          }
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
