import React from 'react';
import PropTypes from 'prop-types';

export default class InputMethod extends React.Component {
  render() {
    const { onChangeHandler } = this.props;
    return (
      <>
        <label htmlFor="method">
          Método de pagamento:
          <select
            onChange={ onChangeHandler }
            name="method"
            id="method"
          >
            <option value="cash">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>
        <br />
      </>
    );
  }
}

InputMethod.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
};
