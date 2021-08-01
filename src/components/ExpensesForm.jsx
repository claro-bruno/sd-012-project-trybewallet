import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ExpensesForm extends Component {
  render() {
    const { myWallet } = this.props;
    const { currencies } = myWallet;
    return (
      <div className="form-expenses">
        <label htmlFor="expenses">
          Valor
          <input type="number" id="expenses" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency">
            { currencies.map(
              (currency, index) => (
                <option key={ index }>
                  { currency }
                </option>),
            )}
          </select>
        </label>
        <label htmlFor="payment">
          Método de Pagamento
          <select id="payment">
            <option>Dinheiro</option>
            <option>Cartão de Débito</option>
            <option>Cartão de Crédito</option>
          </select>
        </label>
        <label htmlFor="description">
          Tag
          <select id="description">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <label htmlFor="expenses-description">
          Descrição
          <input type="text" id="expenses-description" />
        </label>
      </div>
    );
  }
}

ExpensesForm.propTypes = {
  myWallet: PropTypes.objectOf(
    PropTypes.string, PropTypes.array, PropTypes.bool,
  ).isRequired,
};

const mapStateToProps = (state) => ({
  myWallet: state.wallet,
});

export default connect(mapStateToProps)(ExpensesForm);
