import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/standart/Header';
import InputValor from '../components/WalletControlled/InputValor';
import InputDescricao from '../components/WalletControlled/InputDescricao';
import SelectMoeda from '../components/WalletControlled/SelectMoeda';
import SelectMetodoPagto from '../components/WalletControlled/SelectMetodoPagto';
import SelectCategoria from '../components/WalletControlled/SelectCategoria';
import ButtonAddDespesa from '../components/WalletControlled/ButtonAddDespesa';
import { fetchAPI } from '../actions';

class Wallet extends React.Component {
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
    console.log('clicou!');
  }

  render() {
    const {
      state: { expenseAmount, descricao, currency, paymentMethod, category },
      handleChange,
      handleClick,
    } = this;

    return (
      <>
        <Header />
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
      </>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCoins: () => dispatch(fetchAPI()),
});

const { func } = PropTypes;
Wallet.propTypes = {
  getCoins: func.isRequired,
}.isRequired;

export default connect(null, mapDispatchToProps)(Wallet);
