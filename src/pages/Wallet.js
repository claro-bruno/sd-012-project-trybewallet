// Requisito 8 finalizado com a ajuda do colega Miguel Retroz!!
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Table from '../components/Table';
import { fetchApi } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.fetchCurrencies = this.fetchCurrencies.bind(this);
    this.getForm = this.getForm.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  getForm() {
    const { value, description, currency, method, tag } = this.state;
    const { dispatchForms } = this.props;
    const obj = {
      value, description, currency, method, tag,
    };
    dispatchForms(obj);
  }

  async fetchCurrencies() {
    const fetchCurrencies = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await fetchCurrencies.json();
    const currencySelect = Object.keys(response);
    this.setState({
      currencies: currencySelect,
    });
  }

  handleChange({ target }) { // { target: {name, value }} -- OUTRA FORMA DE FAZER ELIMINANDO A LINHA 39.
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  selectPay() {
    const { currencies, currency, method, tag } = this.state;
    return (
      <div>
        <label htmlFor="moeda">
          Moeda
          <select
            name="currency"
            id="moeda"
            value={ currency }
            onChange={ this.handleChange }
          >
            { currencies.map((coins) => {
              if (coins !== 'USDT') {
                return (
                  <option key={ coins }>
                    { coins}
                  </option>);
              } return null;
            })}
          </select>
        </label>
        <label htmlFor="pag">
          Método de pagamento
          <select name="method" value={ method } id="pag" onChange={ this.handleChange }>
            <option value="Dinheiro" id="pagamento">Dinheiro</option>
            <option value="Cartão de crédito" id="pag">Cartão de crédito</option>
            <option value="Cartão de débito" id="pag">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" value={ tag } id="tag" onChange={ this.handleChange }>
            <option value="Alimentação" id="tag">Alimentação</option>
            <option value="Lazer" id="tag">Lazer</option>
            <option value="Trabalho" id="tag">Trabalho</option>
            <option value="Transporte" id="tag">Transporte</option>
            <option value="Saúde" id="tag">Saúde</option>
          </select>
        </label>
      </div>

    );
  }

  render() {
    const { value, description } = this.state;
    return (
      <div>
        <Header />
        <label htmlFor="valor">
          Valor
          <input
            name="value"
            type="number"
            id="valor"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="descrição">
          Descrição
          <input
            name="description"
            type="text"
            id="descrição"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        {this.selectPay()}
        <button
          type="button"
          onClick={ this.getForm }
        >
          Adicionar despesa
        </button>
        <Table />
      </div>
    );
  }
}

Wallet.propTypes = {
  dispatchForms: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchForms: (payload) => dispatch(fetchApi(payload)),
});

export default connect(null, mapDispatchToProps)(Wallet);
