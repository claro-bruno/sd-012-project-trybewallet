import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrenciesThunk, saveStateForm } from '../actions';

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderInputValue = this.renderInputValue.bind(this);
    this.renderPaymentSelect = this.renderPaymentSelect.bind(this);
    this.renderTagSelect = this.renderTagSelect.bind(this);
    this.renderDescript = this.renderDescript.bind(this);
    this.renderCurrSelect = this.renderCurrSelect.bind(this);
    this.idIncrement = this.idIncrement.bind(this);
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { getFetch } = this.props;
    getFetch();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  idIncrement() {
    this.setState((state) => ({ id: state.id + 1 }));
  }

  handleClick() {
    const { saveForm } = this.props;
    this.idIncrement();
    saveForm();
  }

  renderInputValue() {
    const { value } = this.state;

    return (
      <div>
        <label htmlFor="valor">
          Valor
          <input
            className="input-style"
            type="number"
            value={ value }
            id="valor"
            name="value"
            onChange={ this.handleChange }
          />
        </label>
      </div>
    );
  }

  renderCurrSelect() {
    const { currencies } = this.props;
    const { currency } = this.state;

    return (
      <div>
        <label htmlFor="curr-select">
          Moeda
          <select
            className="input-style"
            id="curr-select"
            value={ currency }
            name="currency"
            onChange={ this.handleChange }
          >
            { currencies.filter((curr) => curr !== 'USDT').map((curr) => (
              <option
                value={ curr }
                key={ curr }
              >
                { curr }
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  }

  renderPaymentSelect() {
    const { method } = this.state;
    return (
      <div>
        <label htmlFor="payment-select">
          Método de Pagamento
          <select
            className="input-style"
            id="payment-select"
            value={ method }
            name="method"
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="crédito">Cartão de Crédito</option>
            <option value="débito">Cartão de Débito</option>
          </select>
        </label>
      </div>
    );
  }

  renderTagSelect() {
    const { tag } = this.state;

    return (
      <div>
        <label htmlFor="tag-select">
          Tag
          <select
            className="input-style"
            id="tag-select"
            value={ tag }
            name="tag"
            onChange={ this.handleChange }
          >
            <option value="alimentação">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </div>
    );
  }

  renderDescript() {
    const { description } = this.state;

    return (
      <div>
        <label htmlFor="descrição">
          Descrição
          <input
            className="input-style"
            type="text"
            value={ description }
            id="valor"
            name="description"
            onChange={ this.handleChange }
          />
        </label>
      </div>
    );
  }

  render() {
    return (
      <form className="add-form">
        {this.renderInputValue()}
        {this.renderCurrSelect()}
        {this.renderPaymentSelect()}
        {this.renderTagSelect()}
        {this.renderDescript()}
        <button
          type="button"
          className="btn-add"
          onClick={ this.handleClick }
        >
          Adicionar Despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getFetch: () => dispatch(getCurrenciesThunk()),
  saveForm: () => dispatch(saveStateForm()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  isLoading: state.wallet.isLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);

AddForm.propTypes = {
  getFetch: PropTypes.func.isRequired,
  saveForm: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
