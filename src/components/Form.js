import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAPI } from '../actions';

class Form extends Component {

  componentDidMount() {
    const { actionAPI } = this.props;
    actionAPI();
  }

  render() {
    const { currencies } = this.props;
    const list = currencies.filter((e) => e !== 'USDT');
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input value="0.00" type="number" id="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input type="text" value="" id="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select value="API" id="moeda">
            {
              list.map((e) => (
                <option value={ e } key={ e } id={ e }>
                  {e}
                </option>
              ))
            }
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento:
          <select value="dinheiro" id="pagamento">
            <option value="dinheiro" id="pagamento">Dinheiro</option>
            <option value="credito" id="pagamento">Cartão de crédito</option>
            <option value="debito" id="pagamento">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          TAG:
          <select value="alimentacao" id="tag">
            <option value="alimentacap" id="tag">Alimentação</option>
            <option value="lazer" id="tag">Lazer</option>
            <option value="trabalho" id="tag">Trabalho</option>
            <option value="transporte" id="tag">Transporte</option>
            <option value="saude" id="tag">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { currencies: state.wallet.currencies };
}

function mapDispatchToProps(dispatch) {
  return { actionAPI: () => dispatch(fetchAPI()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
