import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getApi from '../api';
import { getCurrencies } from '../actions';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
      // currency: 'USD',

    };
    this.returnApi = this.returnApi.bind(this);
    this.handleInputs = this.handleInputs.bind(this);
  }

  componentDidMount() {
    this.returnApi();
  }

  async returnApi() {
    const getCoin = await getApi();
    const listCoin = Object.keys(getCoin).filter((coin) => coin !== 'USDT');
    const { sendCurrenciesToStore } = this.props;
    sendCurrenciesToStore(listCoin);
    this.setState({ currencies: listCoin });
  }

  handleInputs({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { currencies } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="text" name="valor" id="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input type="text" name="descricao" id="descricao" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select
            name="currency"
            id="currency"
            onChange={ this.handleInputs }
          >
            {/* <option>Teste<option/> */}
            { currencies.map((coin, index) => (
              <option key={ index }>
                { coin }
              </option>))}
          </select>
        </label>
        <label htmlFor="category">
          Tag:
          <select name="category" id="category">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento:
          <select name="pagamento" id="pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <button name="button" type="button">
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendCurrenciesToStore: (currencies) => dispatch(getCurrencies(currencies)),

});

Form.propTypes = {
  sendCurrenciesToStore: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default connect(null, mapDispatchToProps)(Form);
