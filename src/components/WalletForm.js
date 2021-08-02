import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Input';
import Select from './Select';

class WalletForm extends React.Component {
  render() {
    const { currencies } = this.props;
    return (
      <form>
        <Input
          id="input-value"
          type="number"
          label="Valor"
        />
        <Input
          id="input-description"
          type="text"
          label="Descrição"
        />
        <Select
          id="input-currency"
          label="Moeda"
          options={ [...currencies] }
        />
        <Select
          id="input-method"
          label="Método de pagamento"
          options={ [
            'Dinheiro',
            'Cartão de crédito',
            'Cartão de débito',
          ] }
        />
        <Select
          id="input-tag"
          label="Tag"
          options={ [
            'Alimentação',
            'Lazer',
            'Trabalho',
            'Transporte',
            'Saúde',
          ] }
        />
      </form>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
  ),
};

WalletForm.defaultProps = {
  currencies: [
    {},
    {},
  ],
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
