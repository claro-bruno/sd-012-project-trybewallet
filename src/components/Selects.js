import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Selects extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const { currencies, onChange, currency, method, tag } = this.props;
    return (
      <div>
        <label htmlFor="moeda">
          Moeda:
          <select
            value={ currency }
            id="moeda"
            type="text"
            onChange={ onChange }
            name="currency"
          >
            {Object.keys(currencies).map(
              (c) => <option key={ c } value={ c }>{c}</option>,
            )}
          </select>
        </label>
        <label htmlFor="metodo">
          Método de pagamento:
          <select
            value={ method }
            onChange={ onChange }
            id="metodo"
            type="text"
            name="method"
          >
            <option name="Dinheiro">Dinheiro</option>
            <option name="Cartão de crédito">Cartão de crédito</option>
            <option name="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" value={ tag } onChange={ onChange } type="text" name="tag">
            <option name="Alimentação">Alimentação</option>
            <option name="Lazer">Lazer</option>
            <option name="Trabalho">Trabalho</option>
            <option name="Transporte">Transporte</option>
            <option name="Saúde">Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

Selects.defaultProps = {
  currencies: {},
};

Selects.propTypes = {
  currencies: PropTypes.shape({
    USD: PropTypes.shape({ code: PropTypes.string, ask: PropTypes.string }),
  }),
  onChange: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Selects);
