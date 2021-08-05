import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { payMethods, tags } from '../helpers/optionsSelects';
import { fetchCurrencies, saveExpense } from '../actions';
import Input from './Input';
import Select from './Select';

const REGEX_VALUE = /^(\d*(,?|\.?)?\d{0,2})/;

class NewExpenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
      showAddExpense: false,
      ismobile: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isMobile = this.isMobile.bind(this);
  }

  componentDidMount() {
    this.getCurrencies();
    this.isMobile();
  }

  async getCurrencies() {
    const { getCurrencies } = this.props;
    await getCurrencies();
    const { currencies } = this.props;
    this.setState({ currency: currencies[0] || '' });
  }

  handleChange({ target }) {
    const isCheckbox = target.type === 'checkbox'
      ? target.checked
      : target.value;
    const value = target.name === 'value'
      ? (target.value).match(REGEX_VALUE)[0]
      : isCheckbox;
    this.setState({ [target.name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { saveNewExpense, currencies } = this.props;
    const newExpense = this.state;
    delete newExpense.showAddExpense;
    delete newExpense.ismobile;
    saveNewExpense(newExpense);
    this.setState({
      value: '',
      description: '',
      currency: currencies[0],
      method: 'Dinheiro',
      tag: 'Alimentação',
    }, () => { this.isMobile(); });
  }

  isMobile() {
    const { showAddExpense } = this.state;
    const resolution = window.screen.width;
    const width = 768;
    if (resolution <= width) {
      this.setState({ showAddExpense: false, ismobile: true });
    }
    window.onresize = () => {
      if (resolution <= width && showAddExpense) {
        this.setState({ showAddExpense: false, ismobile: true });
      }
      if (resolution > width && !showAddExpense) {
        this.setState({ showAddExpense: true, ismobile: false });
      }
    };
  }

  renderButton() {
    return (
      <button
        className="btn-addExpense"
        type="submit"
        onClick={ this.handleSubmit }
      >
        Adicionar despesa
      </button>
    );
  }

  renderValorInput(value) {
    return (
      <Input
        textLabel="Valor"
        id="value"
        name="value"
        onChange={ this.handleChange }
        value={ value }
      />
    );
  }

  renderDescriptionInput(description) {
    return (
      <Input
        textLabel="Descrição"
        id="description"
        name="description"
        onChange={ this.handleChange }
        value={ description }
      />);
  }

  renderSelectCurrencies(currency, currencies) {
    return (
      <Select
        textLabel="Moeda"
        id="currency"
        name="currency"
        onChange={ this.handleChange }
        value={ currency }
        options={ currencies }
      />
    );
  }

  renderSelectMethods(method) {
    return (
      <Select
        textLabel="Método de pagamento"
        id="method"
        name="method"
        onChange={ this.handleChange }
        value={ method }
        options={ payMethods }
      />
    );
  }

  renderSelectTags(tag) {
    return (
      <Select
        textLabel="Tag"
        id="tag"
        name="tag"
        onChange={ this.handleChange }
        value={ tag }
        options={ tags }
      />
    );
  }

  renderHiddenMenu(showAddExpense) {
    return (
      <label
        htmlFor="up"
        className="up"
      >
        <input
          name="showAddExpense"
          type="checkbox"
          id="up"
          onChange={ this.handleChange }
          checked={ showAddExpense }
        />
        <i className="bi bi-chevron-bar-up" />
        <span>Fechar</span>
      </label>
    );
  }

  renderShowMenu(showAddExpense) {
    return (
      <label
        style={ { top: `${showAddExpense ? '80vh' : '-10px'}` } }
        htmlFor="down"
        className="down"
      >
        <input
          name="showAddExpense"
          type="checkbox"
          id="down"
          onChange={ this.handleChange }
          checked={ showAddExpense }
        />
        <i className="bi bi-chevron-bar-down" />
        <span>Adicionar Despesa</span>
      </label>
    );
  }

  render() {
    const {
      value, description, currency, method, tag, showAddExpense, ismobile } = this.state;
    const { currencies } = this.props;
    const margin = `${showAddExpense ? '0' : '-81vh'}`;
    return (
      <section className="form-contain">
        <form
          style={ { marginTop: ismobile ? margin : '0' } }
          className="form-newExpense"
          method="get"
        >
          {this.renderHiddenMenu(showAddExpense)}
          {this.renderValorInput(value)}
          {this.renderDescriptionInput(description)}
          {this.renderSelectCurrencies(currency, currencies)}
          {this.renderSelectMethods(method)}
          {this.renderSelectTags(tag)}
          {this.renderButton()}
        </form>
        {this.renderShowMenu(showAddExpense)}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
  saveNewExpense: (expense) => dispatch(saveExpense(expense)),
});

NewExpenses.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  getCurrencies: PropTypes.func.isRequired,
  saveNewExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewExpenses);
