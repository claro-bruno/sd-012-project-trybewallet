import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApiThunk } from '../actions/index';

class WalletForm extends React.Component {


  
  componentDidMount() {
    const { importedCurrencies } = this.props;
    importedCurrencies();
  }

  render() {
    const { isLoading, currencies } = this.props;
    if (isLoading) {
      return (<h1>Carregando...</h1>);
    }
    return (
      <div>
        <form>
          <label htmlFor="input-value">
            Valor:
            <input id="input-value" type="number" name="name" />
          </label>
          <label htmlFor="valor">
            Descrição:
            <input id="valor" type="text" name="name" />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select type="text" name="currency" id="currency">
              {
                currencies.map((moeda) => (<option key={ moeda }>{ moeda }</option>))
              }
            </select>
          </label>

          <label htmlFor="payment">
            Método de pagamento:
            <select type="text" name="payment" id="payment">
              <option value="cash">Dinheiro</option>
              <option value="credit-card">Cartão de crédito</option>
              <option value="debit-card">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="category">
            Tag:
            <select type="text" name="category" id="category">
              <option value="food">Alimentação</option>
              <option value="fun">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}
// Usando o combine reducer
const mapStateToProps = (state) => ({
  isLoading: state.wallet.isLoading,
  currencies: state.wallet.currencies,
});
const mapDispatchToProps = (dispatch) => ({
  importedCurrencies: () => dispatch(fetchApiThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);

WalletForm.propTypes = {
  currencies: PropTypes.shape.isRequired,
  importedCurrencies: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
