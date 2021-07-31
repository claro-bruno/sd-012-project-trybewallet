import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrency } from '../actions/index';

class Select extends Component {
  componentDidMount() {
    const { currentDispatch } = this.props;
    currentDispatch();
  }

  render() {
    const { currentyCodes } = this.props;
    return (
      <div>
        <label htmlFor="current">
          Moeda
          <select id="current">
            {currentyCodes.map((code, index) => <option key={ index }>{ code }</option>)}
          </select>
        </label>
        <label htmlFor="method-payment">
          Método de pagamento
          <select id="method-payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="expenses">
          tag
          <select id="expenses">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

Select.propTypes = {
  currentDispatch: PropTypes.func.isRequired,
  currentyCodes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currentyCodes: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  currentDispatch: () => dispatch(fetchCurrency()),
});

// export default Select;
export default connect(mapStateToProps, mapDispatchToProps)(Select);
