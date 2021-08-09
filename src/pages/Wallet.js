import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Form from '../components/Form';
import { fetchCurrencies } from '../actions';
import Table from '../components/Table';

class Wallet extends React.Component {
  componentDidMount() {
    fetchCurrencies();
  }

  render() {
    const { currencies, expenses } = this.props;
    return (
      <div>
        <Header />
        <Form currencies={ currencies } />
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
            { expenses.map((expense, index) => (
              <Table key={ index } expense={ expense } />)) }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: dispatch(fetchCurrencies()),
});

Wallet.propTypes = ({
  currencies: PropTypes.array,
  expenses: PropTypes.array,
}).isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
