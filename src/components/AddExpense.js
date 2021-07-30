import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchCurrency } from '../actions';
import Input from './Input';
import Select from './Select';
import { methodOptions, tagOptions } from '../helpers/optionsData';

class AddExpense extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: '',
      method: 'money',
      tag: 'food',
      currencyOptions: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((response) => {
        const allCurrencies = Object.keys(response);
        const USDTdeleted = allCurrencies.filter((currency) => currency !== 'USDT');
        const currenciesObject = USDTdeleted.map((currency) => ({
          value: currency,
          description: currency,
        }));
        this.setState({
          currencyOptions: [...currenciesObject],
          currency: currenciesObject[0].value,
        });
      });
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleClick() {
    const { saveExpense } = this.props;
    const teste = { ...this.state };
    delete teste.currencyOptions;
    saveExpense(teste);
    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: 0,
      description: '',
    }));
  }

  render() {
    const { value, description, currencyOptions } = this.state;
    return (
      <section>
        <Input
          text="Valor: "
          type="number"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        />
        <Input
          text="Descrição: "
          type="text"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />
        <Select
          text="Moeda"
          name="currency"
          onChange={ this.handleChange }
          options={ currencyOptions }
        />
        <Select
          text="Método de pagamento"
          name="method"
          onChange={ this.handleChange }
          options={ methodOptions }
        />
        <Select
          text="Tag"
          name="tag"
          onChange={ this.handleChange }
          options={ tagOptions }
        />
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </section>
    );
  }
}

const mapDisptachToProps = (dispatch) => ({
  saveExpense: (expense) => dispatch(fetchCurrency(expense)),
});

AddExpense.propTypes = {
  saveExpense: propTypes.func.isRequired,
};

export default connect(null, mapDisptachToProps)(AddExpense);
