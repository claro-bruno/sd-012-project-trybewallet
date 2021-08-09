import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputDescription from './InputDescription';
import InputValor from './InputValor';
import SelectMoedas from './SelectMoedas';
import SelectPagamento from './SelectPagamento';
import SelectTag from './SelectTag';
import { saveData } from '../../actions';

class FormExpenses extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      // disable: true,
    };

    this.HandleChange = this.HandleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  HandleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  // saveButton
  handleClick() {
    const { saveButton } = this.props;
    saveButton(this.state);
  }

  // SendExpenses() {
  //   const { valor, descricao, moeda, metodo, tag } = this.state;
  //   const { SetExpensesStore } = this.props;
  //   SetExpensesStore({ valor, descricao, moeda, metodo, tag });
  //   this.setState({ // reserta após o envio;
  //     valor: 0,
  //     descricao: '',
  //     moeda: 'USD',
  //     metodo: 'Dinheiro',
  //     tag: 'Alimentação',
  //   });
  // }

  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <InputValor
          value={ value }
          onChange={ this.HandleChange }
        />
        <InputDescription
          value={ description }
          onChange={ this.HandleChange }
        />
        <SelectMoedas
          value={ currency }
          onChange={ this.HandleChange }
        />
        <SelectPagamento
          value={ method }
          onChange={ this.HandleChange }
        />
        <SelectTag
          value={ tag }
          onChange={ this.HandleChange }
        />
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  // fetchCurrency: (currency) => dispatch(getKeys(currency)),
  saveButton: (currencies) => dispatch(saveData(currencies)),
  // SetExpensesStore: (expense) => dispatch(saveExpense(expense)), // criar saveExpense na action
  // SetCurrencysStore: (currencys) => dispatch(data)
});

FormExpenses.propTypes = {
  saveButton: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FormExpenses);
