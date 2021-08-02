import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrency, setExpense } from '../actions';
import Header from '../components/Header';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';

const INITIAL_STATE = {
  id: 0,
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  exchangeRates: {},
};
class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
    this.handleChange = this.handleChange.bind(this);
    this.renderHelper = this.renderHelper.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { dispatchSetCurry } = this.props;
    dispatchSetCurry();
  }

  async onSubmit() {
    const { dispatchSetExpense } = this.props;
    const { id } = this.state;
    this.setState({ exchangeRates: await this.fetchCurrency() },
      () => dispatchSetExpense(this.state));
    INITIAL_STATE.id = id + 1;
    this.setState(INITIAL_STATE);
  }

  async fetchCurrency() {
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((resp) => resp.json())
      .then((currency) => currency);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  renderHelper(currencies) {
    const { value, currency, method, tag } = this.state;
    return (
      <>
        <Input
          type="number"
          label="Valor"
          name="value"
          id="value"
          onChange={ this.handleChange }
          value={ value }
        />
        <Select
          label="Moeda"
          name="currency"
          id="currency"
          defaultOption="USD"
          defaultValue="USD"
          options={ currencies }
          onChange={ this.handleChange }
          value={ currency }
        />
        <Select
          label="Método de pagamento"
          name="method"
          id="method"
          defaultOption="Dinheiro"
          defaultValue="Dinheiro"
          options={ ['Cartão de crédito', 'Cartão de débito'] }
          onChange={ this.handleChange }
          value={ method }
        />
        <Select
          label="Tag"
          name="tag"
          id="tag"
          defaultOption="Alimentação"
          defaultValue="Alimentação"
          options={ ['Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          onChange={ this.handleChange }
          value={ tag }
        />
      </>
    );
  }

  render() {
    const { currencies } = this.props;
    const { description } = this.state;
    return (
      <div>
        <Header />
        <form>
          {this.renderHelper(currencies)}
          <Input
            type="text"
            label="Descrição"
            name="description"
            id="description"
            onChange={ this.handleChange }
            value={ description }
          />
          <Button
            label="Adicionar despesa"
            onClick={ this.onSubmit }
          />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSetCurry: (currencies) => (dispatch(fetchCurrency(currencies))),
  dispatchSetExpense: (state) => (dispatch(setExpense(state))),
});

const mapStateToProps = (state) => (
  {
    currencies: state.wallet.currencies,
  }
);

Wallet.propTypes = {
  dispatchSetCurry: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatchSetExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
