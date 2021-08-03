import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchExpenseData } from '../actions';
import InputNumber from '../Components/InputNumber';
import ImputText from '../Components/InputText';
import SelectCurrency from '../Components/SelectCurrency';
import SelectPayMethods from '../Components/SelectPayMethods';
import SelectTag from '../Components/SelectTag';
import dataPayMethods from '../data/dataPayMethods';
import dataTag from '../data/dataTag';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '0',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { storeExpense } = this.props;
    storeExpense(this.state);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <form onSubmit={ this.handleSubmit }>
        <InputNumber
          id="expenseValue"
          label="Valor"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        />
        <ImputText
          id="expenseText"
          label="Descrição"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />
        <SelectCurrency
          id="selectCurrency"
          label="Moeda"
          name="currency"
          value={ currency }
          onChange={ this.handleChange }
          options={ currencies }
        />
        <SelectPayMethods
          id="payMethods"
          label="Método de pagamento"
          name="method"
          value={ method }
          onChange={ this.handleChange }
          options={ dataPayMethods }
        />
        <SelectTag
          id="tagExpense"
          label="Tag"
          name="tag"
          value={ tag }
          onChange={ this.handleChange }
          options={ dataTag }
        />
        <button type="submit">
          Adicionar despesa
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  storeExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  storeExpense: (expense) => dispatch(fetchExpenseData(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
