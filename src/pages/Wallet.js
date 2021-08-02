import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrency } from '../actions';
import Header from '../components/Header';
import Input from '../components/Input';
import Select from '../components/Select';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatchSetCurry } = this.props;
    dispatchSetCurry();
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <Header />
        <div>Wallet</div>
        <form>
          <Input
            type="text"
            label="Valor"
            name="Valor"
            id="Valor"
          />
          <Input
            type="text"
            label="Descrição"
            name="Descrição"
            id="Descrição"
          />
          <Select
            label="Moeda"
            name="Moeda"
            id="Moeda"
            defaultOption="USD"
            defaultValue="USD"
            options={ currencies }
          />
          <Select
            label="Método de pagamento"
            name="Método de pagamento"
            id="Método de pagamento"
            defaultOption="Dinheiro"
            defaultValue="Dinheiro"
            options={ ['Cartão de crédito', 'Cartão de débito'] }
          />
          <Select
            label="Tag"
            name="Tag"
            id="Tag"
            defaultOption="Alimentação"
            defaultValue="Alimentação"
            options={ ['Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSetCurry: (currencies) => (dispatch(fetchCurrency(currencies))),
});

const mapStateToProps = (state) => (
  {
    currencies: state.wallet.currencies,
  }
);

Wallet.propTypes = {
  dispatchSetCurry: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
