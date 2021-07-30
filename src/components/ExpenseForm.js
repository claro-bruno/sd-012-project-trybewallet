import React from 'react';
import { connect } from 'react-redux';
import Input from './Input';
import Button from './Button';
import Select from './Select';

const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const category = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class ExpenseForm extends React.Component {
  render() {
    const { currencies } = this.props;
    return (
      <form>
        <Input
          label="Valor"
          type="text"
          name="valor"
          onChange={ () => {} }
          value=""
        />
        <Select
          label="Moeda"
          name="moeda"
          options={ currencies }
        />
        <Select
          label="Método de pagamento"
          name="payment"
          options={ paymentMethods }
        />
        <Select
          label="Tag"
          name="tag"
          options={ category }
        />
        <Input
          label="Descrição"
          type="text"
          name="descricao"
          onChange={ () => {} }
          value=""
        />
        <Button
          text="Adicionar"
          name="add"
          onClick={() => {}}
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(ExpenseForm);