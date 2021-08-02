import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputValor from './InputValor';
import InputDescricao from './InputDescricao';
import SelectMoeda from './SelectMoeda';
import SelectMetodoPagto from './SelectMetodoPagto';
import SelectCategoria from './SelectCategoria';
import ButtonAddDespesa from './ButtonAddDespesa';
import { fetchAPI } from '../../actions/getApiCoins';

class Forms extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      expenseAmount: 0,
      descricao: '',
      currency: '',
      paymentMethod: '',
      category: '',
    };
  }

  componentDidMount() {
    const { getCoins } = this.props;
    getCoins();
  }

  handleChange({ target: { name, type, value, checked } }) {
    function newValue() {
      switch (type) {
      case 'checkbox': return checked;
      case 'number': return +value;
      default: return value;
      }
    }
    this.setState((state) => ({ ...state, [name]: newValue() }));
  }

  handleClick() {
    const {
      state: { expenseAmount, descricao, currency, paymentMethod, category },
      props: { coins },
    } = this;

    const dataAPI = coins.reduce(
      (accumulator, coin) => ({
        ...accumulator,
        [coin[0]]: coin[1],
      }),
      {},
    );

    const data = {
      value: expenseAmount,
      description: descricao,
      currency,
      method: paymentMethod,
      tag: category,
      exchangeRates: dataAPI,
    };
    console.log(data);
  }

  render() {
    const {
      state: { expenseAmount, descricao, currency, paymentMethod, category },
      handleChange,
      handleClick,
    } = this;
    return (
      <form>
        <InputValor
          value={ expenseAmount }
          handleChange={ handleChange }
        />
        <InputDescricao
          value={ descricao }
          handleChange={ handleChange }
        />
        <SelectMoeda
          value={ currency }
          handleChange={ handleChange }
        />
        <SelectMetodoPagto
          value={ paymentMethod }
          handleChange={ handleChange }
        />
        <SelectCategoria
          value={ category }
          handleChange={ handleChange }
        />
        <ButtonAddDespesa
          handleClick={ handleClick }
        />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCoins: () => dispatch(fetchAPI()),
  // saveDataStore: (state) => dispatch(saveDataForms(state)),
});

const mapStateToProps = (state) => ({
  coins: state.wallet.currencies,
});

const { func, array } = PropTypes;
Forms.propTypes = {
  getCoins: func.isRequired,
  saveDataStore: func.isRequired,
  coins: array.isRequired,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
