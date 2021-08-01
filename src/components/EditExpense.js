import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { payMethods, tags } from '../helpers/optionsSelects';
import { saveEditedExpense } from '../actions';
import Input from './Input';
import Select from './Select';

const REGEX_VALUE = /^(\d*(,?|\.?)?\d{0,2})/;

class EditExpense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.expenseEdit,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const value = target.name === 'value'
      ? (target.value).match(REGEX_VALUE)[0]
      : target.value;
    this.setState({ [target.name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { editExpense } = this.props;
    editExpense(this.state);
  }

  renderButton() {
    return (
      <button
        className="btn-editExpense"
        type="submit"
        onClick={ this.handleSubmit }
      >
        Editar despesa
      </button>
    );
  }

  renderForm({ value, description, currency, method, tag }, currencies) {
    return (
      <form className="form-editExpense" method="get">
        <Input
          dataTestId="value-input"
          textLabel="Valor"
          id="value"
          name="value"
          onChange={ this.handleChange }
          value={ value }
        />
        <Input
          dataTestId="description-input"
          textLabel="Descrição"
          id="description"
          name="description"
          onChange={ this.handleChange }
          value={ description }
        />
        <Select
          dataTestId="currency-input"
          textLabel="Moeda"
          id="currency"
          name="currency"
          onChange={ this.handleChange }
          value={ currency }
          options={ currencies }
        />
        <Select
          dataTestId="method-input"
          textLabel="Método de pagamento"
          id="pay-method"
          name="method"
          onChange={ this.handleChange }
          value={ method }
          options={ payMethods }
        />
        <Select
          dataTestId="tag-input"
          textLabel="Tag"
          id="tag"
          name="tag"
          onChange={ this.handleChange }
          value={ tag }
          options={ tags }
        />
        {this.renderButton()}
      </form>
    );
  }

  render() {
    const { currencies } = this.props;
    return (
      this.renderForm(this.state, currencies)
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenseEdit: state.wallet.expenseEdit,
});

const mapDispatchToProps = (dispatch) => ({
  editExpense: (expense) => dispatch(saveEditedExpense(expense)),
});

EditExpense.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  editExpense: PropTypes.func.isRequired,
  expenseEdit: PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    exchangeRates: PropTypes.objectOf(PropTypes.object),
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
