import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI } from '../actions';

class Form extends Component {
  componentDidMount() {
    const { fetchAPI: currencies } = this.props;
    currencies();
  }

  render() {
    const { currencies } = this.props;
    return (
      <form action="">
        <label htmlFor="input-value">
          Valor
          <input type="number" name="amount" id="input-value" />
        </label>

        <label htmlFor="description">
          Descrição
          <input type="text" name="descrição" id="description" />
        </label>

        <label htmlFor="currency">
          Moeda
          <select name="moeda" id="currency">
            {currencies.map((cur) => <option key={ cur } value={ cur }>{ cur }</option>)}
          </select>
        </label>
        <label htmlFor="input-payment">
          Método de pagamento
          <select name="payment" id="input-payment">
            <option value="money">Dinheiro</option>
            <option value="cc">Cartão de crédito</option>
            <option value="dc">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-input">
          Tag
          <select name="tag" id="tag-input">
            <option value="food">Alimentação</option>
            <option value="entertainment">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="travel">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

Form.propTypes = {
  fetchAPI: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: () => dispatch(fetchAPI()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
