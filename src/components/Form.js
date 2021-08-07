import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { requestAPI } = this.props;
    return requestAPI();
  }

  handleChange(event) {
    const { name } = event.target;
    this.setState({
      [name]: event.target.value,
    });
  }

  handleClick() {
    const { requestAPI } = this.props;
    requestAPI();
    const { expenses, id } = this.props;
    expenses(this.state, id);
  }

  render() {
    // const { value, currency, method, description, tag } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="number" name="value" id="value" onChange={ this.handleChange } />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            name="desciption"
            id="description"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency" name="currency" onChange={ this.handleChange }>
            { currencies.map((item, index) => <option key={ index }>{ item }</option>) }
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select id="payment" name="payment" onChange={ this.handleChange }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" onChange={ this.handleChange }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Esporte</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (dispatch) => ({
  currencies: dispatch.wallet.currencies,
  id: dispatch.wallet.id,
});

const mapDispatchToProps = (dispatch) => ({
  requestAPI: () => dispatch(actions.fetchAPI()),
  // expenses: (payload, id) => dispatch(actions.AddExpenses(payload, id)),
});

Form.propTypes = {
  requestAPI: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
