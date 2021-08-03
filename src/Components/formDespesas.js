import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { string } from 'yargs';

class FormDespesas extends React.Component {
  constructor() {
    super();
    this.getCurrencies = this.getCurrencies.bind(this);
  }

  getCurrencies() {
    const { currencies } = this.props;
    const currkeys = Object.keys(currencies);
    return currkeys.map((currency) => {
      if (currency !== 'USDT') {
        return <option>{ currency }</option>;
      }
      return null;
    });
  }

  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="text" name="Valor" id="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input type="text" name="input-descricao" id="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select name="input-moeda" id="moeda">
            { this.getCurrencies() }
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select name="input-pagamento" id="pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="input-tag" id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

FormDespesas.propTypes = {
  currencies: PropTypes.objectOf(string).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(FormDespesas);
