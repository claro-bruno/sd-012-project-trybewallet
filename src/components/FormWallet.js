import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrency } from '../actions';

class FormWallet extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      valor: 0,
      descricao: '',
      moeda: 'USD',
      metodo: 'Dinheiro',
      categoria: 'Alimentação',
    };
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { currencies } = this.props;
    const { valor, descricao, moeda, metodo, categoria } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input
            type="number"
            name="valor"
            value={ valor }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input
            type="text"
            name="descricao"
            value={ descricao }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select name="moeda" value={ moeda } onChange={ this.handleChange }>
            { currencies.map((e, i) => <option value={ e } key={ i }>{ e }</option>) }
          </select>
        </label>
        <label htmlFor="metodo">
          Método de pagamento
          <select name="metodo" value={ metodo } onChange={ this.handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de Crédito">Cartão de Crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Tag
          <select name="categoria" value={ categoria } onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="button">Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrency()),
});

FormWallet.propTypes = {
  fetchCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormWallet);
