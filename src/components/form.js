import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TagSelector from './tagSelector';
import { actionCurrenciThunk } from '../actions';

class Form extends React.Component {
  componentDidMount() {
    const { saveCurrencie } = this.props;
    saveCurrencie();
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="text" name="value" id="value" />
        </label>
        <label htmlFor="description">
          Descrição:
          <textarea name="description" id="description" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            name="currency"
            id="currency"
          >
            { currencies.map((opt) => (
              <option key={ opt }>{opt}</option>
            ))}
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento
          <select
            name="payment-method"
            id="payment-method"
          >
            <option value="cash">Dinheiro</option>
            <option value="credit-card">Cartão de crédito</option>
            <option value="debt-card">Cartão de débito</option>
          </select>
        </label>
        <TagSelector />
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  saveCurrencie: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveCurrencie: () => dispatch(actionCurrenciThunk()),
});

const mapSateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapSateToProps, mapDispatchToProps)(Form);
