import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class InputMethod extends Component {
  render() {
    const { handleChange } = this.props;
    const payments = ['Selecione', 'Dinheiro', 'Cartão de débito', 'Cartão de crédito'];

    return (
      <label htmlFor="payment">
        Método de Pagamento
        <select required id="payment" onChange={ handleChange } name="method">
          { payments.map((payment, index) => (
            <option key={ index }>
              { payment }
            </option>)) }
        </select>
      </label>
    );
  }
}

InputMethod.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  myWallet: state.wallet,
});

export default connect(mapStateToProps)(InputMethod);
