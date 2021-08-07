import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class OutGoing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: '',
      descricao: '',
      moedas: [],
      pagamento: 'Dinheiro',
      tag: 'alimentacao',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCurrencies = this.handleCurrencies.bind(this);
    this.inputDescricao = this.inputDescricao.bind(this);
    this.inputValue = this.inputValue.bind(this);
  }

  handleChange({ target }) {
    const { name, value, type } = target;
    const inputValid = (type === 'number' && type >= 0) ? 0 : value;
    this.setState({
      [name]: inputValid,
    });
  }

  handleOnSubmit(e) {
    e.preventDefault();
  }

  inputValue(onChange) {
    const { valor } = this.state;
    return (
      <label htmlFor="valor">
        Valor:
        <input
          type="text"
          id="valor"
          name="valor"
          value={ valor }
          onChange={ onChange }
        />
      </label>
    );
  }

  inputDescricao(onChange) {
    const { descricao } = this.state;
    return (
      <label htmlFor="descricao">
        Descrição:
        <input
          type="text"
          id="descricao"
          name="descricao"
          value={ descricao }
          onChange={ onChange }
        />
      </label>
    );
  }

  handleCurrencies() {
    const { currencies } = this.props;
    const listaMoedas = currencies;
    return listaMoedas
      .map((moeda) => (
        <option
          value={ moeda }
          key={ moeda }
        >
          {moeda}
        </option>));
  }

  render() {
    const { tag, pagamento, moedas } = this.state;
    return (
      <form onSubmit={ (e) => this.handleOnSubmit(e) }>
        {this.inputValue(this.handleChange)}
        {this.inputDescricao(this.handleChange)}
        <label htmlFor="moeda">
          Moeda:
          <select
            id="moeda"
            name="moeda"
            value="DOL"
            onChange={ ({ target }) => this.handleChange([moedas], target.value) }
          >
            {this.handleCurrencies()}
          </select>
        </label>
        <label htmlFor="value">
          método de pagamento:
          <select
            id="value"
            name="value"
            value={ pagamento }
            onChange={ ({ target }) => this.handleChange(target.name, target.value) }
          >
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de Débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          tag:
          <select
            id="tag"
            name="tag"
            value={ tag }
            onChange={ ({ target }) => this.handleChange(target.name, target.value) }
          >
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="trasporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
        <button type="submit">adicionar despesa</button>
      </form>
    );
  }
}

OutGoing.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(OutGoing);
