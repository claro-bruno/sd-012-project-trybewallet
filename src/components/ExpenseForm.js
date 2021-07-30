import React from 'react';
import { connect } from 'react-redux';
import { func, arrayOf, string } from 'prop-types';
import { fetchCurrencies } from '../actions';

class ExpenseForm extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    const { fetchCurrencies: fetchCurr } = this.props;
    fetchCurr();
  }

  paymentSelect() {
    return (
      <label htmlFor="payment-input">
        Método de pagamento
        <select name="payment" id="payment-input">
          <option value="cash">Dinheiro</option>
          <option value="cc">Cartão de crédito</option>
          <option value="db">Cartão de débito</option>
        </select>
      </label>
    );
  }

  tagSelect() {
    return (
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
    );
  }

  render() {
    const { currencies } = this.props;
    return (
      <form action="">
        <label htmlFor="valor-input">
          Valor
          <input type="number" name="amount" id="valor-input" />
        </label>

        <label htmlFor="description-input">
          Descrição
          <input type="text" name="description" id="description-input" />
        </label>

        <label htmlFor="currency-input">
          Moeda
          <select name="currency" id="currency-input">
            {currencies.map((c) => <option key={ c } value={ c }>{c}</option>)}
          </select>
        </label>

        {this.paymentSelect()}

        {this.tagSelect()}

      </form>
    );
  }
}

ExpenseForm.propTypes = {
  fetchCurrencies: func.isRequired,
  currencies: arrayOf(string).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
