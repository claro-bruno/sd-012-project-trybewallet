import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import Button from './Button';
import { fetchExpense, ENDPOINT } from '../actions';

class NewExpense extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exchangeRates: {},
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.fetchCurrency = this.fetchCurrency.bind(this);
  }

  componentDidMount() {
    this.fetchCurrency();
  }

  async fetchCurrency() {
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    this.setState({ exchangeRates: data });
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { add } = this.props;
    const { id } = this.props;
    add({ ...this.state, id });
  }

  renderInputs() {
    const {
      value,
      description,
    } = this.state;

    return (
      <div>
        <Input
          labelText="Valor:"
          name="value"
          inputType="text"
          inputPlaceholder="Valor da Compra"
          value={ value }
          onChange={ this.handleChange }
        />
        <Input
          labelText="Descrição:"
          name="description"
          inputType="text"
          inputPlaceholder="Descrição"
          value={ description }
          onChange={ this.handleChange }
        />
      </div>
    );
  }

  renderSelects() {
    const {
      exchangeRates,
      currency,
      method,
      tag,
    } = this.state;

    return (
      <div>
        <Select
          options={
            Object.keys(exchangeRates)
              .filter((actualCurrency) => actualCurrency !== 'USDT')
          }
          labelText="Moeda:"
          name="currency"
          value={ currency }
          onChange={ this.handleChange }
        />
        <Select
          options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          labelText="Método de pagamento:"
          name="method"
          value={ method }
          onChange={ this.handleChange }
        />
        <Select
          options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          labelText="Tag:"
          name="tag"
          value={ tag }
          onChange={ this.handleChange }
        />
      </div>
    );
  }

  renderButton() {
    return (
      <Button
        buttonText="Adicionar despesa"
        onClick={ () => this.handleClick() }
        disabled={ false }
      />
    );
  }

  render() {
    return (
      <form>
        { this.renderInputs() }
        { this.renderSelects() }
        { this.renderButton() }
      </form>
    );
  }
}

NewExpense.propTypes = {
  add: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  add: (expense) => dispatch(fetchExpense(expense)),
});

const mapStateToProps = (state) => ({
  id: state.wallet.expenses.length,
});

export default connect(mapStateToProps, mapDispatchToProps)(NewExpense);
