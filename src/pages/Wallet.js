import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      coinsList: [],
    };
  }

  componentDidMount() {
    window.addEventListener('load', this.fetchCoinAPI());
  }

  async fetchCoinAPI() {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const coins = await fetch(url)
      .then((response) => response.json())
      .then((data) => Object.keys(data))
      .then((coinsList) => this.setState({
        coinsList,
      }));
    return coins;
  }

  renderValueInput() {
    return (
      <label htmlFor="Valor">
        Valor
        <input
          id="Valor"
          placeholder="Coloque aqui a sua despesa."
        />
      </label>
    );
  }

  renderDescriptionInput() {
    return (
      <label htmlFor="Descrição">
        Descrição
        <input
          id="Descrição"
          placeholder="Coloque aqui a descrição da sua despesa."
        />
      </label>
    );
  }

  renderMoedaSelect() {
    const { coinsList } = this.state;

    const filteredCointList = coinsList.filter((item) => item !== 'USDT');

    return (
      <label htmlFor="Moeda">
        Moeda
        <select id="Moeda" alt="Moeda">
          {filteredCointList.map((coin) => (
            <option key={ coin }>
              { coin }
            </option>
          ))}
        </select>
      </label>
    );
  }

  renderPayMethodSelect() {
    return (
      <label htmlFor="Método de pagamento">
        Método de pagamento
        <select id="Método de pagamento" alt="Método de pagamento">
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>

    );
  }

  renderTagSelect() {
    return (
      <label htmlFor="Método de pagamento">
        Tag
        <select id="Tag" alt="Tag">
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { user } = this.props;

    return (
      <div>
        <header>
          <div data-testid="email-field">
            { user.email }
          </div>
          <div data-testid="total-field">0</div>
          <div data-testid="header-currency-field">BRL</div>
        </header>

        <form>
          {this.renderValueInput()}
          {this.renderDescriptionInput()}
          {this.renderMoedaSelect()}
          {this.renderPayMethodSelect()}
          {this.renderTagSelect()}
        </form>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

Wallet.propTypes = {
  user: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps)(Wallet);
