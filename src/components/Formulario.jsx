import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI, addExpense, currencyThunk } from '../actions/index';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.createSelect = this.createSelect.bind(this);
    this.createInput = this.createInput.bind(this);
    this.createButton = this.createButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.fetchAPI = this.dataAPI.bind(this);

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { choiceCurrency } = this.props;
    choiceCurrency();
  }

  dataAPI() {
    const data = fetchAPI();
    return data;
  }

  async handleClick() {
    const { newExpense, expenses } = this.props;

    newExpense({
      ...this.state,
      id: expenses.length,
      exchangeRates: await this.dataAPI(),
    });
    this.setState({
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    });
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  createSelect(name, label, arr) {
    return (
      <label htmlFor={ name }>
        {label}
        <select
          name={ name }
          id={ name }
          onChange={ (e) => this.handleChange(e) }
        >
          {arr.map((element, index) => <option key={ index }>{element}</option>)}
        </select>
      </label>
    );
  }

  createInput(name, label, type) {
    return (
      <label htmlFor={ name }>
        {label}
        <input
          type={ type }
          name={ name }
          id={ name }
          onChange={ (e) => this.handleChange(e) }
        />
      </label>
    );
  }

  createButton() {
    return (
      <button
        type="button"
        onClick={ (e) => this.handleClick(e) }
      >
        Adicionar despesa
      </button>
    );
  }

  render() {
    const typeOfExpense = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const paymentChoice = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const { currencies } = this.props;

    return (
      <form>
        {this.createInput('value', 'Valor:', 'number')}
        {this.createInput('description', 'Descrição', 'text')}
        {this.createSelect('currency', 'Moeda', currencies)}
        {this.createSelect('method', 'Método de pagamento', paymentChoice)}
        {this.createSelect('tag', 'Tag', typeOfExpense)}
        {this.createButton()}
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  choiceCurrency: () => dispatch(currencyThunk()),
  newExpense: (expense) => dispatch(addExpense(expense)),
});

Form.propTypes = {
  currencies: PropTypes.shape(PropTypes.string || PropTypes.object || PropTypes.array),
  expenses: PropTypes.arrayOf(PropTypes.object),
  changeCurrencie: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
