import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editExpense, getCurrencies } from '../actions';

class EditForm extends Component {
  constructor(props) {
    super(props);
    const { selectedExpense: {
      id, method, tag, value, description, currency,
    } } = this.props;
    this.state = {
      id, method, tag, value, description, currency,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderSelects = this.renderSelects.bind(this);
  }

  componentDidMount() {
    const { fetcher } = this.props;
    fetcher();
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleSubmit(e) {
    const { id } = this.state;
    e.preventDefault();
    const { edit } = this.props;
    edit(this.state, id);
  }

  renderSelects() {
    const { method, tag } = this.state;
    return (
      <>
        <label htmlFor="method-input">
          Método de pagamento
          <select
            name="method"
            id="method-input"
            value={ method }
            data-testid="method-input"
            className="form-control"
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-input">
          Tag
          <select
            name="tag"
            id="tag-input"
            data-testid="tag-input"
            value={ tag }
            onChange={ this.handleChange }
            className="form-control"
          >
            <option value="" disabled> </option>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </>
    );
  }

  render() {
    const { currencieNames } = this.props;
    const { value, description, currency } = this.state;
    return (
      <form onSubmit={ this.handleSubmit } className="edit expense-form">
        <label htmlFor="value-input">
          Valor
          <input
            type="number"
            data-testid="value-input"
            name="value"
            id="value-input"
            value={ value }
            onChange={ this.handleChange }
            className="form-control"
          />
        </label>
        <label htmlFor="desc-input">
          Descrição
          <input
            type="text"
            name="description"
            id="desc-input"
            data-testid="description-input"
            value={ description }
            onChange={ this.handleChange }
            className="form-control"
          />
        </label>
        <label htmlFor="currency-input">
          Moeda
          <select
            name="currency"
            id="currency-input"
            value={ currency }
            data-testid="currency-input"
            onChange={ this.handleChange }
            className="form-control"
          >
            {currencieNames && currencieNames.filter((item) => item !== 'USDT')
              .map((crcy, i) => (
                <option key={ i }>{crcy}</option>
              ))}
          </select>
        </label>
        {this.renderSelects()}
        <button type="submit" className="btn btn-warning">Editar despesa</button>
      </form>
    );
  }
}

EditForm.defaultProps = {
  currencieNames: undefined,
};

EditForm.propTypes = {
  selectedExpense: PropTypes.shape({
    value: PropTypes.number,
    description: PropTypes.string,
    method: PropTypes.string,
    currency: PropTypes.string,
    tag: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  fetcher: PropTypes.func.isRequired,
  currencieNames: PropTypes.arrayOf(PropTypes.string),
  edit: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  selectedExpense: wallet.selected,
  currencieNames: wallet.currencieNames,
});

const mapDispatchToProps = (dispatch) => ({
  fetcher: () => dispatch(getCurrencies()),
  edit: (expense, id) => dispatch(editExpense(expense, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
