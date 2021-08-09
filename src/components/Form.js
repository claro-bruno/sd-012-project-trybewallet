import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI, addRates, addExpenses } from '../actions';
import Table from './Table';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentção',
      exchangeRates: {},
      expenses: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderInputValor = this.renderInputValor.bind(this);
    this.renderInputDescricao = this.renderInputDescricao.bind(this);
    this.renderSelect = this.renderSelect.bind(this);
    this.saveExpenses = this.saveExpenses.bind(this);
  }

  componentDidMount() {
    const { actionAPI } = this.props;
    actionAPI();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleClick() {
    const { expenses } = this.props;
    const id = expenses.length || 0;
    this.setState({
      id,
    });
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((result) => this.setState({ exchangeRates: result }, () => {
        this.saveExpenses();
      }));
  }

  saveExpenses() {
    const { id, value, description, currency, method, tag, exchangeRates } = this.state;
    this.setState((state) => ({
      ...state,
      expenses: ({ id, value, description, currency, method, tag, exchangeRates }),
    }), () => {
      const { expenses } = this.state;
      const { addExpensesRedux } = this.props;
      addExpensesRedux(expenses);
    });
  }

  renderInputValor(value) {
    return (
      <input
        name="value"
        value={ value }
        type="number"
        id="valor"
        onChange={ this.handleChange }
      />
    );
  }

  renderInputDescricao(handleChange, description) {
    return (
      <input
        onChange={ handleChange }
        name="description"
        type="text"
        value={ description }
        id="descricao"
      />
    );
  }

  renderSelect(handler, value) {
    return (
      <select
        name="method"
        onChange={ handler }
        value={ value }
        id="pagamento"
      >
        <option value="Dinheiro" id="pagamento">Dinheiro</option>
        <option value="Cartão de crédito" id="pagamento">Cartão de crédito</option>
        <option value="Cartão de débito" id="pagamento">Cartão de débito</option>
      </select>
    );
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const list = currencies.filter((e) => e !== 'USDT');
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          { this.renderInputValor(value) }
        </label>
        <label htmlFor="descricao">
          Descrição:
          { this.renderInputDescricao(this.handleChange, description) }
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select
            onChange={ this.handleChange }
            name="currency"
            value={ currency }
            id="moeda"
          >
            { list.map((e) => (<option value={ e } key={ e } id={ e }>{e}</option>)) }
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento:
          { this.renderSelect(this.handleChange, method) }
        </label>
        <label htmlFor="tag">
          TAG:
          <select name="tag" onChange={ this.handleChange } value={ tag } id="tag">
            <option value="Alimentação" id="tag">Alimentação</option>
            <option value="Lazer" id="tag">Lazer</option>
            <option value="Trabalho" id="tag">Trabalho</option>
            <option value="Transporte" id="tag">Transporte</option>
            <option value="Saúde" id="tag">Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
        <Table />
      </form>

    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  actionAPI: PropTypes.func.isRequired,
  addExpensesRedux: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

function mapStateToProps(state) {
  return {
    currencies: state.wallet.currencies,
    expenses: state.wallet.expenses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actionAPI: () => dispatch(fetchAPI()),
    addRates: (state) => dispatch(addRates(state)),
    addExpensesRedux: (state) => dispatch(addExpenses(state)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
