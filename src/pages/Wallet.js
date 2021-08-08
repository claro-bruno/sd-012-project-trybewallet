import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      coins: [],
    };

    // this.renderHeader = this.renderHeader.bind(this);
    // this.renderExpenseForm = this.renderExpenseForm.bind(this);
    // this.renderExpenseTable = this.renderExpenseTable.bind(this);
    this.fetchCoinsOptions = this.fetchCoinsOptions.bind(this);
  }

  componentDidMount() {
    this.fetchCoinsOptions();
  }

  async fetchCoinsOptions() {
    const URL_API = 'https://economia.awesomeapi.com.br/json/all';
    const request = await fetch(URL_API);
    const data = await request.json();
    // console.log(data);
    const arrayCoins = Object.keys(data);
    // console.log(arrayCoins);
    this.setState({
      coins: arrayCoins,
    });
  }

  handleClickAddExpenses() {
    // const { } = this.state;
  }

  renderHeader() {
    const { email } = this.props;
    return (
      <div>
        <p data-testid="email-field">
          {`Email: ${email}`}
          {/* { console.log(email) } */}
        </p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>

    );
  }

  renderExpenseForm() {
    const { coins } = this.state;
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>
        <label htmlFor="valor-input">
          Valor:
          <input id="valor-input" type="text" name="valor" />
        </label>
        <label htmlFor="description-input">
          Descrição:
          <input id="description-input" type="text" name="description" />
        </label>
        <label htmlFor="coin-select">
          Moeda
          <select id="coin-select">
            { coins.map((coin) => {
              if (coin === 'USDT') return '';
              return (
                <option key={ coin }>
                  { coin }
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="payment-method-select">
          Método de pagamento
          <select id="payment-method-select">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-select">
          Tag
          <select id="tag-select">
            { tags.map((tag) => (
              <option key={ tag }>{tag}</option>
            ))}
            {/* <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option> */}
          </select>
        </label>
      </form>
    );
  }

  renderAddExpensesBtn() {
    return (
      <button
        type="submit"
        onClick={ this.handleClickAddExpenses }
      >
        Adicionar despesa
      </button>
    );
  }

  renderExpenseTable() {
    return (
      <div>

        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>

              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
            </tr>
          </thead>
        </table>
        <button type="button">Editar/Excluir</button>
        {/* <button type="button">Excluir</button> */}

      </div>
    );
  }

  render() {
    return (
      <div>
        <header>
          <h3>Trybe Wallet</h3>
          { this.renderHeader() }
        </header>
        <section>
          { this.renderExpenseForm() }
          { this.renderAddExpensesBtn() }
          { this.renderExpenseTable() }
        </section>

      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
