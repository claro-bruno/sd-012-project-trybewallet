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
        <Button name="Adicionar Despesa" />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(fetchAPI()),
});

const mapStateToProps = (state) => ({
  loading: state.wallet.loading,
  currencies: state.wallet.currencies,
});

WalletTable.propTypes = {
  getCurrency: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletTable);
