import React from 'react';
import { connect } from 'react-redux';
import { func, arrayOf, string, number, shape, bool } from 'prop-types';
import { fetchCurrencies, addExpense, replaceExpense } from '../actions';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    // const { currencies } = this.props;
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      nowEditing: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.saveClick = this.saveClick.bind(this);
    this.replaceClick = this.replaceClick.bind(this);
  }

  componentDidMount() {
    const { fetchCurrencies: fetchCurr } = this.props;
    fetchCurr();
  }

  componentDidUpdate() {
    const { editing } = this.props;
    const { nowEditing } = this.state;
    if (editing.edit && !nowEditing) this.loadEdit(editing);
  }

  loadEdit(editing) {
    const { value, description, currency, method, tag } = editing.expense;
    this.setState({
      value, description, currency, method, tag, nowEditing: true,
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  cleanState() {
    this.setState({
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      nowEditing: false,
    });
  }

  saveClick(e) {
    e.preventDefault();
    const {
      fetchCurrencies: fetchCurr,
      currenciesResp,
      addExpense: addExp,
      expenses,
    } = this.props;
    fetchCurr();
    const id = expenses.length;
    const { value, description, currency, method, tag } = this.state;
    const expenseObj = {
      value,
      description,
      currency,
      method,
      tag,
      id,
      exchangeRates: currenciesResp,
    };
    addExp(expenseObj);
    this.cleanState();
  }

  replaceClick(e) {
    e.preventDefault();
    const { replace, editing } = this.props;
    const { value, description, currency, method, tag } = this.state;
    replace({ ...editing.expense, value, description, currency, method, tag });
    this.cleanState();
  }

  currenciesSelect(currencies, currency) {
    return (
      <label htmlFor="currency-input">
        Moeda
        <select
          className="form-select"
          name="currency"
          data-testid="currency-input"
          id="currency-input"
          value={ currency }
          onChange={ this.handleChange }
        >
          {currencies.map((c) => <option key={ c } value={ c }>{c}</option>)}
        </select>
      </label>
    );
  }

  methodSelect(method) {
    return (
      <label htmlFor="method-input">
        Método de pagamento
        <select
          className="form-select"
          name="method"
          data-testid="method-input"
          id="method-input"
          value={ method }
          onChange={ this.handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  tagSelect(tag) {
    return (
      <label htmlFor="tag-input">
        Tag
        <select
          className="form-select"
          name="tag"
          id="tag-input"
          value={ tag }
          data-testid="tag-input"
          onChange={ this.handleChange }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  sendBtn() {
    const { nowEditing } = this.state;
    if (nowEditing) {
      return (
        <button className="btn btn-primary" type="submit" onClick={ this.replaceClick }>
          Editar despesa
        </button>
      );
    }
    return (
      <button className="btn btn-primary" type="submit" onClick={ this.saveClick }>
        Adicionar despesa
      </button>
    );
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form className="row gy-2 gx-3 align-items-end justify-content-center">
        <div className="col-auto">
          <label htmlFor="valor-input">
            Valor
            <input
              className="form-control"
              data-testid="value-input"
              type="number"
              name="value"
              id="valor-input"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <div className="col-auto">
          <label htmlFor="description-input">
            Descrição
            <input
              className="form-control"
              type="text"
              data-testid="description-input"
              name="description"
              id="description-input"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <div className="col-auto">{this.currenciesSelect(currencies, currency)}</div>
        <div className="col-auto">{this.methodSelect(method)}</div>
        <div className="col-auto">{this.tagSelect(tag)}</div>
        <div className="col-auto">{this.sendBtn()}</div>
      </form>
    );
  }
}
ExpenseForm.defaultProps = {
  expenses: [],
  editing: { edit: false, expense: {} },
  currenciesResp: {},
};
ExpenseForm.propTypes = {
  fetchCurrencies: func.isRequired,
  addExpense: func.isRequired,
  replace: func.isRequired,
  currencies: arrayOf(string).isRequired,
  currenciesResp: shape({
    USD: shape({ code: string, ask: string }),
  }),
  expenses: arrayOf(
    shape({
      id: number,
      value: string,
      description: string,
    }),
  ),
  editing: shape({
    edit: bool,
    expense: shape({
      id: number,
      value: string,
      description: string,
    }),
  }),
};
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  currenciesResp: state.wallet.currenciesResp,
  expenses: state.wallet.expenses,
  editing: state.wallet.editing,
});
const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrencies()),
  addExpense: (expense) => dispatch(addExpense(expense)),
  replace: (expense) => dispatch(replaceExpense(expense)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
