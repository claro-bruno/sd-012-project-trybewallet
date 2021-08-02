import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './wallet.css';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moneyInitials: [],
    };

    this.getMoneyInitials = this.getMoneyInitials.bind(this);
  }

  componentDidMount() {
    this.getMoneyInitials();
  }

  async getMoneyInitials() {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    const moneyInitials = Object.keys(result).filter((initials) => initials !== 'USDT');
    this.setState({ moneyInitials });
  }

  renderFormHelper() {
    return (
      <div>
        <label htmlFor="method-id">
          Método de pagamento:
          <select className="form-item" id="method-id">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-id">
          Tag:
          <select className="form-item" id="tag-id">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <label htmlFor="description-id">
          Descrição:
          <input
            type="text"
            id="description-id"
            name="description"
            className="form-item"
          />
        </label>
      </div>
    );
  }

  renderForm() {
    const { moneyInitials } = this.state;
    return (
      <form className="form-section">
        <label htmlFor="value-id">
          Valor:
          <input
            type="number"
            id="value-id"
            name="value"
            className="form-item"
          />
        </label>
        <label htmlFor="currency-id">
          Moeda:
          <select className="form-item-currency" aria-label="Moeda" id="currency-id">
            { moneyInitials.map((init) => <option key={ init }>{ init }</option>) }
          </select>
        </label>
        { this.renderFormHelper() }
      </form>
    );
  }

  render() {
    const { email } = this.props;

    return (
      <section>
        <header className="header-section">
          <h1>TRYBE WALLET</h1>
          <section className="header-info-section">
            <div>
              <p data-testid="email-field">{ `Email: ${email}` }</p>
            </div>
            <div className="expense-info">
              <p data-testid="total-field">Despesa Total: 0</p>
              <p data-testid="header-currency-field">BRL</p>
            </div>
          </section>
        </header>
        { this.renderForm() }
      </section>
    );
  }
}

const mapStateToPros = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToPros)(Wallet);
