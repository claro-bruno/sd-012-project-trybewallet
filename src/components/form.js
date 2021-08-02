import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Form extends React.Component {
  render() {
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
            <option>Selecione</option>
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
        <label htmlFor="tag">
          Tag
          <select
            name="tag"
            id="tag"
          >
            <option value="food">Alimentação</option>
            <option value="recreation">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}
// Header.propTypes = {
//   email: PropTypes.string.isRequired,
// };

// const mapSateToProps = ({ user }) => ({
//   email: user.email,
// });

export default connect(null, null)(Form);
