import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Input from '../components/Input';
import Select from '../components/Select';
import Table from '../components/Table';
import { TAGS, PAYMENT } from '../data';
import { fetchCoins, sendValuesToStore } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      description: '',
      tag: 'Alimentação',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.getCurrentQuote = this.getCurrentQuote.bind(this);
    this.getStateValues = this.getStateValues.bind(this);
  }

  componentDidMount() {
    const { setCoins } = this.props;
    setCoins();
  }

  getCurrentQuote() {
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((coins) => this.setState({ exchangeRates: coins }));
  }

  async getStateValues() {
    await this.getCurrentQuote();
    const { sendValues } = this.props;
    const { id, value, currency, method, description, tag, exchangeRates } = this.state;
    sendValues({ id, value, currency, method, description, tag, exchangeRates });
    this.setState((oldState) => ({
      id: oldState.id + 1,
      value: 0,
      currency: 'USD',
      method: 'Dinheiro',
      description: '',
      tag: 'Alimentação',
      exchangeRates: {},
    }));
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { currencies } = this.props;
    const { value, currency, method, description, tag } = this.state;
    return (
      <div>
        <form>
          <Header />
          <Input
            name="value"
            text="Valor"
            handleChange={ this.handleChange }
            value={ value }
          />
          <Select
            name="currency"
            text="Moeda"
            content={ currencies }
            handleChange={ this.handleChange }
            value={ currency }
          />
          <Select
            name="method"
            text="Método de Pagamento"
            content={ PAYMENT }
            handleChange={ this.handleChange }
            value={ method }
          />
          <Input
            name="description"
            text="Descrição"
            handleChange={ this.handleChange }
            value={ description }
          />
          <Select
            name="tag"
            text="Tag:"
            content={ TAGS }
            handleChange={ this.handleChange }
            value={ tag }
          />
          <button type="button" onClick={ this.getStateValues }>Adicionar Despesa</button>
        </form>
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCoins: () => dispatch(fetchCoins()),
  sendValues: (values) => dispatch(sendValuesToStore(values)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Wallet.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  sendValues: PropTypes.func.isRequired,
  setCoins: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
