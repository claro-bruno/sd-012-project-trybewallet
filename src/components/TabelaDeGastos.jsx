import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TabelaDeGastos extends Component {
  render() {
    const params = [
      'Descrição',
      'Tag',
      'Método de pagamento',
      'Valor', 'Moeda',
      'Câmbio utilizado',
      'Valor convertido',
      'Moeda de conversão',
      'Editar/Excluir'];
    const { expenses } = this.props;
    return (
      <section>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              {params.map((param, i) => <th scope="col" key={ i }>{param}</th>)}
            </tr>
          </thead>
          <tbody>
            {expenses
              .map(({ description, tag, method, value, exchangeRates, currency, id }) => (
                <tr key={ id }>
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>{value}</td>
                  <td>{exchangeRates[currency].name}</td>
                  <td>{Math.round(exchangeRates[currency].ask * 100) / 100}</td>
                  <td>{Math.round(value * exchangeRates[currency].ask * 100) / 100}</td>
                  <td>Real</td>
                  <td>void</td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    );
  }
}

TabelaDeGastos.propTypes = {
  expenses: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(TabelaDeGastos);
