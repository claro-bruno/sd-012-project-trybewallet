import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Formulario extends React.Component {
  constructor(props) {
    super(props);

    this.getMoedas = this.getMoedas.bind(this);
  }

  getMoedas() {
    const { moedas } = this.props;
    const lista = moedas.map((moeda) => Object.keys(moeda));
    const result = lista[0].filter((moeda) => moeda !== 'USDT')
      .map((moeda) => <option key={ moeda }>{moeda}</option>);
    return result;
  }

  render() {
    return (
      <form>
        <label htmlFor="inputValue">
          valor
          <input type="number" id="inputValue" />
        </label>
        <label htmlFor="moeda">
          moeda
          <select id="moeda">
            {this.getMoedas()}
          </select>
        </label>
        <label htmlFor="payment">
          Método de Pagamento
          <select id="payment">
            <option value="money">Dinheiro</option>
            <option value="credit_card">Cartão de crédito</option>
            <option value="debit_card">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          tag
          <select id="tag">
            <option value="food">Alimentação</option>
            <option value="recreation">Lazer</option>
            <option value="job">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
        <label htmlFor="describe">
          Descrição
          <input type="text" id="describe" />
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  moedas: state.wallet.currencies,
});

Formulario.propTypes = ({
  moedas: PropTypes.array,
}).isRequired;

export default connect(mapStateToProps)(Formulario);
