import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchAPI, addExpense } from '../actions';

class AddExpense extends Component {
  constructor() {
    super();

    this.state = {
      id: -1,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.renderFormTop = this.renderFormTop.bind(this);
    this.renderFormMiddle = this.renderFormMiddle.bind(this);
    this.renderFormBottom = this.renderFormBottom.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  onSubmitForm() {
    const { sendToStore, exchangeRates, getCurrencies } = this.props;
    getCurrencies();
    const { id } = this.state;
    this.setState({
      id: id + 1,
      exchangeRates,
    }, () => {
      sendToStore(this.state);
      this.setState({
        value: 0,
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
        exchangeRates: {},
      });
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  renderFormTop() {
    const {
      value,
      description,
    } = this.state;
    return (
      <spam>
        Adicione um gasto:
        <label htmlFor="value">
          Valor
          <input
            id="value"
            type="number"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            id="description"
            type="text"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
      </spam>
    );
  }

  renderFormMiddle() {
    const { currency } = this.state;
    const { currencyList } = this.props;
    return (
      <spam>
        <label htmlFor="currency">
          Moeda:
          <select
            id="currency"
            name="currency"
            required
            value={ currency }
            onChange={ this.handleChange }
          >
            <option value="USD">USD</option>
            {
              currencyList && currencyList.map((option, index) => (
                <option key={ index }>{ option }</option>
              ))
            }
          </select>
        </label>
      </spam>
    );
  }

  renderFormBottom() {
    const methods = ['Cartão de crédito', 'Cartão de débito'];
    const tags = ['Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { method, tag } = this.state;
    return (
      <spam>
        <label htmlFor="method">
          Método de pagamento:
          <select
            id="method"
            name="method"
            required
            value={ method }
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            {
              methods.map((option, index) => (
                <option key={ index }>{ option }</option>
              ))
            }
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select
            id="tag"
            name="tag"
            required
            value={ tag }
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            {
              tags.map((option, index) => (
                <option key={ index }>{ option }</option>
              ))
            }
          </select>
        </label>
        <button
          type="button"
          onClick={ this.onSubmitForm }
        >
          Adicionar despesa
        </button>
      </spam>
    );
  }

  render() {
    return (
      <form>
        {this.renderFormTop()}
        {this.renderFormMiddle()}
        {this.renderFormBottom()}
      </form>
    );
  }
}

AddExpense.propTypes = {
  sendToStore: PropTypes.func.isRequired,
  getCurrencies: PropTypes.func.isRequired,
  exchangeRates: PropTypes.objectOf(PropTypes.object).isRequired,
  currencyList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currencyList: state.wallet.currencyList,
  exchangeRates: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchAPI()),
  sendToStore: (payload) => dispatch(addExpense(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
