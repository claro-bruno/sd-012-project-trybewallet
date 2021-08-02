import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApi, fetchApiExchange } from '../actions';
import ButtonForm from './ButtonForm';
import './form.css';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitExpense = this.submitExpense.bind(this);
  }

  componentDidMount() {
    const { getDataFromAPI } = this.props;
    getDataFromAPI();
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  submitExpense() {
    const { exchangeRates } = this.props;
    const { value, description, currency, method, tag } = this.state;
    exchangeRates({ value, description, currency, method, tag });
  }

  render() {
    const { currencies } = this.props;
    return (
      <div className="form-container">
        <form>
          <label htmlFor="value">
            Valor
            <input id="value" name="value" type="number" onChange={ this.handleChange } />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              id="description"
              name="description"
              type="text"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="currency">
            Moeda
            <select id="currency" name="currency" onChange={ this.handleChange }>
              {Object.keys(currencies).map(
                (curr, index) => (<option key={ index } value={ curr }>{curr}</option>),
              )}
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento
            <select id="method" name="method" onChange={ this.handleChange }>
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="category">
            Tag
            <select id="category" name="tag" onChange={ this.handleChange }>
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <ButtonForm onClick={ () => this.submitExpense() } />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getDataFromAPI: (data) => dispatch(fetchApi(data)),
  exchangeRates: (data) => dispatch(fetchApiExchange(data)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Form.propTypes = {
  getDataFromAPI: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.object).isRequired,
  exchangeRates: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
