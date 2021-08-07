import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/**
 * Consultei o repositório de Cristian Brum para resolver essa parte.
 * Link: https://github.com/tryber/sd-011-project-trybewallet/pull/2/commits/509915ffc966093751035625fa747638888af868
 */

class ExpenseForm extends Component {
  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value-input">
          Valor
          <input type="number" name="valor" id="value-input" data-testid="value-input" />
        </label>

        <label htmlFor="descript">
          Descrição
          <input type="text" name="descript" id="descript" data-testid="descript" />
        </label>

        <label htmlFor="currency-input">
          Moeda
          <select id="currency-input" data-testid="currency-input">
            { currencies && currencies.map((currency) => (
              <option key={ currency }>{ currency }</option>
            )) }
          </select>
        </label>

        <label htmlFor="method-input">
          Método de pagamento
          <select id="method-input" data-testid="method-input">
            <option value="money">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag-input">
          Tag
          <select id="tag-input" data-testid="tag-input">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
        <button type="button">Adicionar Despesas</button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(ExpenseForm);
