import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchAPI, addExpense } from '../actions';

class AddExpense extends Component {
  constructor(props) {
    super(props);

    this.state = props;

    this.handleChange = this.handleChange.bind(this);
    this.renderFormTop = this.renderFormTop.bind(this);
    this.renderFormMiddle = this.renderFormMiddle.bind(this);
    this.renderFormBottom = this.renderFormBottom.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  onSubmitForm() {
    const { sendToStore, exchangeRates, getCurrencies } = this.props;
    getCurrencies();
    const { id } = this.state;
    this.setState({
      id: id + 1,
      exchangeRates,
    }, () => {
      sendToStore(this.state);
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  renderFormTop() {
    const {
      value,
      description,
    } = this.state;
    return (
      <spam>
        Edite o gasto:
        <label htmlFor="value">
          Valor
          <input
            id="value"
            data-testid="value-input"
            type="number"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            id="description"
            data-testid="description-input"
            type="text"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
      </spam>
    );
  }

  renderFormMiddle() {
    const { currency } = this.state;
    const { currencyList } = this.props;
    return (
      <spam>
        <label htmlFor="currency">
          Moeda:
          <select
            id="currency"
            data-testid="currency-input"
            name="currency"
            required
            value={ currency }
            onChange={ this.handleChange }
          >
            <option value="USD">USD</option>
            {
              currencyList && currencyList.map((option, index) => (
                <option key={ index }>{ option }</option>
              ))
            }
          </select>
        </label>
      </spam>
    );
  }

  renderFormBottom() {
    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { method, tag } = this.state;
    return (
      <spam>
        <label htmlFor="method">
          Método de pagamento:
          <select
            id="method"
            data-testid="method-input"
            name="method"
            required
            value={ method }
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            {
              methods.map((option, index) => (
                <option key={ index }>{ option }</option>))
            }
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select
            id="tag"
            data-testid="tag-input"
            name="tag"
            required
            value={ tag }
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            {
              tags.map((option, index) => (
                <option key={ index }>{ option }</option>
              ))
            }
          </select>
        </label>
        <button
          type="button"
          onClick={ this.onSubmitForm }
        >
          Editar despesa
        </button>
      </spam>
    );
  }

  render() {
    return (
      <form>
        {this.renderFormTop()}
        {this.renderFormMiddle()}
        {this.renderFormBottom()}
      </form>
    );
  }
}

AddExpense.propTypes = {
  sendToStore: PropTypes.func.isRequired,
  getCurrencies: PropTypes.func.isRequired,
  exchangeRates: PropTypes.objectOf(PropTypes.object).isRequired,
  currencyList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currencyList: state.wallet.currencyList,
  exchangeRates: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchAPI()),
  sendToStore: (payload) => dispatch(addExpense(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
