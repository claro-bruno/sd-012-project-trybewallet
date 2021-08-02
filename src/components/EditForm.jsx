import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrencies } from '../actions';

class EditForm extends Component {
  constructor(props) {
    super(props);
    const { selectedExpense: {
      method, tag, value, description, currency,
    } } = this.props;
    this.state = {
      method, tag, value, description, currency,
    };
  }

  componentDidMount() {
    const { fetcher } = this.props;
    fetcher();
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
            value={ tag }
            onChange={ this.handleChange }
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
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="value-input">
          Valor
          <input
            type="number"
            name="value"
            id="value-input"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="desc-input">
          Descrição
          <input
            type="text"
            name="description"
            id="desc-input"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency-input">
          Moeda
          <select
            name="currency"
            id="currency-input"
            value={ currency }
            onChange={ this.handleChange }
          >
            {currencieNames && currencieNames
              .filter((item) => item !== 'USDT')
              .map((crcy, i) => (
                <option key={ i }>{crcy}</option>
              ))}
          </select>
        </label>
        {this.renderSelects()}
        <button type="submit">Editar despesa</button>
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
  }).isRequired,
  fetcher: PropTypes.func.isRequired,
  currencieNames: PropTypes.arrayOf(PropTypes.string),
};

const mapStateToProps = ({ wallet }) => ({
  selectedExpense: wallet.selected,
  currencieNames: wallet.currencieNames,
});

const mapDispatchToProps = (dispatch) => ({
  fetcher: () => dispatch(getCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
