import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApi } from '../actions';

class FormWallet extends React.Component {
  componentDidMount() {
    const { getDataFromAPI } = this.props;
    getDataFromAPI();
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="number" id="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" id="description" />
        </label>
        <label htmlFor="tip">
          Moeda
          <select id="tip">
            { Object.keys(currencies).map((curr) => (
              <option
                key={ curr }
              >
                { curr }
              </option>)) }
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select id="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Transporte</option>
            <option>Trabalho</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getDataFromAPI: (data) => dispatch(fetchApi(data)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

FormWallet.propTypes = {
  getDataFromAPI: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormWallet);
