import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCoins, addExpense, editItem } from '../actions';
import Table from '../components/Table';
import Header from '../components/Header';
import Forms from '../components/Forms';

const initialTag = 'Alimentação';

const initialState = {
  currency: [],
  valor: 0,
  moeda: 'USD',
  pagamento: 'Dinheiro',
  tag: initialTag,
  description: '',
  times: 0,
};

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = initialState;

    this.getCurrency = this.getCurrency.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.tag = this.tag.bind(this);
    this.descricao = this.descricao.bind(this);

    this.myFunc = this.myFunc.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    this.getCurrency();
  }

  componentDidUpdate() {
    this.myFunc();
  }

  async getCurrency() {
    const { coinsApi } = this.props;
    await coinsApi();
    const { wallet } = this.props;
    const keys = Object.keys(wallet[0]);
    const formattedCurrency = keys.filter((item) => item !== 'USDT');
    this.setState({
      currency: formattedCurrency,
    });
  }

  async handleClick() {
    const { expenseAddFunc, expenses, wallet, coinsApi } = this.props;
    const { valor, tag, moeda, pagamento, description } = this.state;
    await coinsApi();
    const obj = {
      id: expenses.length,
      value: valor,
      description,
      currency: moeda,
      method: pagamento,
      tag,
      exchangeRates: wallet[0],
    };
    expenseAddFunc(obj);
    this.setState({
      valor: 0,
      moeda: 'USD',
      pagamento: 'Dinheiro',
      tag: initialTag,
      description: '',
    });
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  tag() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select
          data-testid="tag-input"
          name="tag"
          value={ tag }
          onChange={ this.handleChange }
          id="tag"
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  descricao() {
    const { description } = this.state;
    return (
      <label htmlFor="descricao">
        Descrição
        <input
          data-testid="description-input"
          name="description"
          value={ description }
          onChange={ this.handleChange }
          id="descricao"
          type="text"
        />
      </label>
    );
  }

  myFunc() {
    const { editing, expenses, edit } = this.props;
    const { times } = this.state;
    if (edit && times === 0) {
      const myItem = expenses.find((item) => item.id === editing);
      const { value, currency, method, tag, description } = myItem;
      this.setState({
        valor: value,
        moeda: currency,
        pagamento: method,
        tag,
        description,
        times: 1,
      });
    }
  }

  handleEdit() {
    const { expenseEditFunc, /* wallet */ editing } = this.props;
    const { valor, tag, moeda, pagamento, description } = this.state;
    const obj = {
      id: editing,
      value: valor,
      description,
      currency: moeda,
      method: pagamento,
      tag,
      // exchangeRates: wallet[0],
    };
    // console.log(wallet);
    expenseEditFunc(obj);
    this.setState({
      valor: 0,
      moeda: 'USD',
      pagamento: 'Dinheiro',
      tag: initialTag,
      description: '',
      times: 0,
    });
  }

  render() {
    const { email, allExpenses, edit } = this.props;
    const add = (
      <button onClick={ this.handleClick } type="button">Adicionar despesa</button>);
    const edt = (
      <button
        onClick={ this.handleEdit }
        type="button"
      >
        Editar despesa
      </button>);
    const { valor, moeda, currency, pagamento } = this.state;
    return (
      <div>
        <Header email={ email } allExpenses={ allExpenses } />
        <form>
          <Forms
            valor={ parseInt(valor, 10) }
            moeda={ moeda }
            currency={ currency }
            pagamento={ pagamento }
            handleChange={ this.handleChange }
          />
          { this.tag() }
          { this.descricao() }
          { !edit ? add : edt }
        </form>
        <Table />
      </div>
    );
  }
}

Wallet.defaultProps = {
  wallet: [{}],
  editing: 999,
  edit: false,
};

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  coinsApi: PropTypes.func.isRequired,
  expenseAddFunc: PropTypes.func.isRequired,
  allExpenses: PropTypes.number.isRequired,
  editing: PropTypes.number,
  expenseEditFunc: PropTypes.func.isRequired,
  edit: PropTypes.bool,
  wallet: PropTypes.arrayOf(PropTypes.object),
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  editing: state.wallet.editing,
  wallet: state.wallet.wallet,
  edit: state.wallet.edit,
  allExpenses: state.wallet.expenses
    .reduce((
      acc,
      { value, currency, exchangeRates },
    ) => {
      // console.log(exchangeRates, currency);
      if (Object.keys(exchangeRates).length) {
        return acc + (parseFloat(+exchangeRates[currency].ask) * value);
      }
      return acc;
    }, 0),
});

const mapDispatchToProps = (dispatch) => ({
  coinsApi: (state) => dispatch(getCoins(state)),
  expenseAddFunc: (state) => dispatch(addExpense(state)),
  expenseEditFunc: (state) => dispatch(editItem(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
