import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import Button from './Button';
import { fetchAPI } from '../actions';

class WalletTable extends Component {
  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  render() {
    const paymentOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { currencies = [] } = this.props;
    return (
      <div>
        <Input
          title="Valor"
          type="text"
          name="valor"
          placeholder="Insira o Valor"
        />
        <Input
          title="Descrição"
          type="text"
          name="descricao"
          placeholder="Insira a Descrição"
        />
        <Select
          title="Método de pagamento"
          name="pagamento"
          options={ paymentOptions }
        />
        <Select
          title="Tag"
          name="categoria"
          options={ tagOptions }
        />
        <Select
          title="Moeda"
          name="moeda"
          options={ currencies }
        />
        <Button name="Adicionar Despesa" />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(fetchAPI()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletTable.propTypes = {
  getCurrency: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletTable);
