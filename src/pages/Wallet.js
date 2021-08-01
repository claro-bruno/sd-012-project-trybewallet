import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      currency: 'USD',
      currencies: [],
      method: '',
      tag: '',
      value: '',
      id: 0,
      exchangeRates: {},
      description: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.inputValue = this.inputValue.bind(this);
    this.getApi = this.getApi.bind(this);
    this.getCurrencies = this.getCurrencies.bind(this);
    this.inputMethod = this.inputMethod.bind(this);
    this.inputCategory = this.inputCategory.bind(this);
  }

  componentDidMount() {
    this.getCurrencies();
  }

  async getApi() {
    const endpoint = 'https://economia.awesomeapi.com.br/json/all';
    const fetchApi = await fetch(endpoint);
    const data = await fetchApi.json();
    return data;
  }

  async getCurrencies() {
    const data = await this.getApi();
    const objectKeys = Object.keys(data);
    const currencies = objectKeys.filter((item) => item !== 'USDT');

    this.setState({
      currencies,
      exchangeRates: data,
    });
  }

  inputCurrency() {
    const { currencies } = this.state;
    return (
      <div>
        <label htmlFor="currency-input">Moeda
          <select
            data-testid="currency-input"
            name="currency"
            id="currency-input"
            onChange={ (event) => this.handleChange(event) }
          >
            {currencies.map((data) => (
              <option key={ data } value={ data } data-testid={ data }>
                {data}
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  }

  inputValue() {
    const { value } = this.state;
    return (
      <div>
        <label htmlFor="value-input">Valor
          <input
            type="text"
            name="value"
            value={ value }
            data-testid="value-input"
            id="value-input"
            placeholder="Insira o valor"
            onChange={ (event) => this.handleChange(event) }
          />
        </label>
        <label htmlFor="description-input">Descrição
          <textarea
            type="text"
            name="description"
            data-testid="description-input"
            id="description-input"
            placeholder="Insira a descrição"
            onChange={ (event) => this.handleChange(event) }
          />
        </label>
      </div>
    );
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  inputMethod() {
    const methodArray = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <div>
        <label htmlFor="method-input">Método de pagamento
          <select
            data-testid="method-input"
            id="method-input"
            name="method"
            onChange={ (event) => this.handleChange(event) }
          >
            {methodArray.map((method) => (
              <option key={ method } value={ method } data-testid={ method }>
                {method}
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  }

  inputCategory() {
    const categoryArray = [
      'Alimentação',
      'Lazer',
      'Trabalho',
      'Transporte',
      'Saúde',
    ];

    return (
      <div>
        <label htmlFor="tag-input">Tag
          <select
            data-testid="tag-input"
            name="tag"
            id="tag-input"
            onChange={ (event) => this.handleChange(event) }
          >
            {categoryArray.map((category) => (
              <option key={ category } value={ category } data-testid={ category }>
                {category}
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  }

  handleClick() {
    const {
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    } = this.state;
    let { id } = this.state;
    const { expensesCreator } = this.props;
    this.getCurrencies();
    expensesCreator({ value,
      description,
      currency,
      method,
      tag,
      id,
      exchangeRates });
    id += 1;
    this.setState({ id, value: '' }, () => this.totalValue());
  }

  totalValue() {
    const { expenses, totalAmount } = this.props;

    let total = 0;
    const arr = expenses.map((objs) => (objs.value
    * (objs.exchangeRates[objs.currency].ask)));
    for (let i = 0; i < arr.length; i += 1) {
      total += arr[i];
    }
    totalAmount(total);
  }

  render() {
    const { email, amount } = this.props;
    return (
      <div>
        <header>
          <div>
            <p data-testid="email-field">{ email }</p>
            <div data-testid="total-field">
              0
              { amount }
            </div>
            <p data-testid="header-currency-field">BRL</p>
          </div>
        </header>
        <div>
          {this.inputValue()}
          {this.inputCurrency()}
          {this.inputMethod()}
          {this.inputCategory()}
          <button type="button" onClick={ this.handleClick }>
            Adicionar despesa
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  email: state.user.email,
  amount: state.wallet.amount,
});

const mapDispatchToProps = (dispatch) => ({
  expensesCreator: (expenses) => dispatch({ type: 'ADD_DESPESAS', expenses }),
  totalAmount: (amount) => dispatch({ type: 'TOTAL_AMOUNT', amount }),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  totalAmount: PropTypes.func.isRequired,
  expensesCreator: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
