import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApi } from '../actions';
import './form.css';

class Form extends Component {
  componentDidMount() {
    const { getDataFromAPI } = this.props;
    getDataFromAPI();
  }

  render() {
    const { currencies } = this.props;
    return (
      <div className="form-container">
        <form>
          <label htmlFor="value">
            Valor
            <input id="value" />
          </label>
          <label htmlFor="description">
            Descrição
            <input id="description" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select id="currency">
              {Object.keys(currencies).map((curr, index) => (
                <option
                  key={ index }
                  value={ curr }
                >
                  {curr}
                </option>))}
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
          <label htmlFor="category">
            Tag
            <select id="category">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getDataFromAPI: (data) => dispatch(fetchApi(data)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Form.propTypes = {
  getDataFromAPI: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
