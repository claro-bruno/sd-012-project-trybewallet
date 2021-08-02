import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies, fetchRates, removeItem, editItem } from '../redux/actions';
import WalletHeader from '../components/WalletHeader';
// import './Login.css'

const initialState = {
  value: 0,
  description: '',
  currency: 'USD',
  method: '',
  tag: '',
  type: 'create',
  selectedItem: null,
};

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = initialState;
    this.addExpenseBtnClick = this.addExpenseBtnClick.bind(this);
    this.expenseForm = this.expenseForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.expensesTable = this.expensesTable.bind(this);
    this.tableRemoveBtnClick = this.tableRemoveBtnClick.bind(this);
    this.editExpenseClick = this.editExpenseClick.bind(this);
    this.tableEditBtnClick = this.tableEditBtnClick.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  addExpenseBtnClick() {
    const { expenses, addExpense } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const expense = { id: expenses.length, value, description, currency, method, tag };
    addExpense(expense).then(this.setState(initialState));
  }

  tableRemoveBtnClick({ target: { name } }) {
    const { removeExpense } = this.props;
    removeExpense(name);
  }

  editExpenseClick() {
    const { editExpense } = this.props;
    const { selectedItem, value, description, currency, method, tag } = this.state;
    const editedItem = { ...selectedItem, value, description, currency, method, tag };
    editExpense(editedItem);
    this.setState(initialState);
  }

  tableEditBtnClick(item) {
    const { expenses } = this.props;
    const selectedItem = (expenses.filter(({ id }) => Number(id) === Number(item)))[0];
    const { value, description, currency, method, tag } = selectedItem;
    this.setState({
      type: 'edit', selectedItem, value, description, currency, method, tag,
    });
  }

  handleChange({ target: { id, value } }) {
    this.setState({
      [id]: value,
    });
  }

  createSelectInput(properties) {
    const [id, text, value, dataTest, options, callback] = properties;
    return (
      <label htmlFor={ id }>
        { text }
        <select id={ id } onChange={ callback } value={ value } data-testid={ dataTest }>
          {options.map((opt, i) => <option key={ i } value={ opt }>{ opt }</option>)}
        </select>
      </label>
    );
  }

  msgDiv(msg) {
    return (
      <div>
        { msg }
      </div>
    );
  }

  expenseForm(type) {
    const { createSelectInput, handleChange, addExpenseBtnClick,
      editExpenseClick } = this;
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const methodArray = ['', 'Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tagArray = ['', 'Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const types = {
      create: ['Adicionar despesa', addExpenseBtnClick],
      edit: ['Editar despesa', editExpenseClick],
    };
    return (
      <div className={ type }>
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            id="value"
            data-testid="value-input"
            value={ value }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            data-testid="description-input"
            value={ description }
            onChange={ handleChange }
          />
        </label>
        {createSelectInput(['currency', 'Moeda: ', currency, 'currency-input',
          currencies, handleChange])}
        {createSelectInput(['method', 'Método de pagamento: ',
          method, 'method-input', methodArray, handleChange])}
        {createSelectInput(['tag', 'Tag: ', tag, 'tag-input', tagArray, handleChange])}
        <button type="button" onClick={ types[type][1] }>
          {types[type][0]}
        </button>
      </div>
    );
  }

  tableItemsBtns(text, id, testeid, callback) {
    return (
      <button type="button" name={ id } data-testid={ testeid } onClick={ callback }>
        {text}
      </button>
    );
  }

  expensesTable() {
    const { expenses } = this.props;
    const { tableRemoveBtnClick, tableEditBtnClick, tableItemsBtns } = this;
    const tableHeader = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
      'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    const formatter = new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return (
      <table>
        <thead>
          <tr>
            {tableHeader.map((head, i) => <th key={ i }>{head}</th>)}
          </tr>
        </thead>
        <tbody>
          { expenses.map((expense, i) => {
            const { id, description, tag, method, value, currency } = expense;
            const { ask, name } = expense.exchangeRates[currency];
            const convertCurrency = name.split('/')[0];
            const actualCurrency = 'Real';
            const convertedValue = formatter.format(Number(ask) * Number(value));
            const editOrRemove = (
              <>
                { tableItemsBtns('X', id, 'delete-btn', tableRemoveBtnClick) }
                { tableItemsBtns('edit', id, 'edit-btn', () => tableEditBtnClick(id)) }
              </>
            );
            const columnValues = [description, tag, method, value,
              convertCurrency, formatter.format(ask), convertedValue,
              actualCurrency, editOrRemove];
            return (
              <tr key={ i }>
                {columnValues.map((data, j) => (
                  <td key={ String(i) + String(j) }>{ data }</td>
                ))}
              </tr>);
          })}
        </tbody>
      </table>
    );
  }

  render() {
    const { expenseForm, msgDiv, expensesTable } = this;
    const { onLoadingC, onLoadingR, error } = this.props;
    const { type } = this.state;
    return (
      <>
        <WalletHeader />
        { expenseForm(type) }
        { expensesTable() }
        { (onLoadingC || onLoadingR) && msgDiv('LOADING...') }
        { (error) && msgDiv(error) }
      </>
    );
  }
}

Wallet.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onLoadingC: PropTypes.bool,
  onLoadingR: PropTypes.bool,
  error: PropTypes.string,
  getCurrencies: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired,
  removeExpense: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
};

Wallet.defaultProps = {
  error: null,
  onLoadingC: false,
  onLoadingR: false,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  onLoadingC: state.wallet.onLoadingCurrencies,
  onLoadingR: state.wallet.onLoadingRates,
  error: state.wallet.error,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
  addExpense: (expense) => dispatch(fetchRates(expense)),
  removeExpense: (id) => dispatch(removeItem(id)),
  editExpense: (id) => dispatch(editItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
