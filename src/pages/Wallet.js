import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import SelectApi from '../components/SelectApi';
import SelectPayment from '../components/SelectPayment';
import SelectTag from '../components/SelectTag';
import Button from '../components/Button';
import { fetchCurrent } from '../actions';

class Wallet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: '0',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleInputs = this.handleInputs.bind(this);
    this.submitState = this.submitState.bind(this);
  }

  handleInputs({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  submitState() {
    const { fetchCotacao } = this.props;
    fetchCotacao(this.state);
  }

  render() {
    const { emailState } = this.props;
    const { currenciesKeys, value, description, currency, method, tag } = this.state;
    return (
      <>
        <header>
          <h3 data-testid="email-field">{ emailState }</h3>
          <h3 data-testid="total-field" label="Valor">0</h3>
          <h3 data-testid="header-currency-field">BRL</h3>
        </header>
        <form>
          <Input
            type="text"
            onChange={ this.handleInputs }
            value={ value }
            label="Valor"
            name="value"
          />
          <Input
            type="text"
            onChange={ this.handleInputs }
            value={ description }
            label="Descrição"
            name="description"
          />
          <SelectApi
            label="Moeda"
            onChange={ this.handleInputs }
            value={ currency }
            endpoint={ currenciesKeys }
            name="currency"
          />
          <SelectPayment
            label="Método de pagamento"
            value={ method }
            onChange={ this.handleInputs }
            name="method"
          />
          <SelectTag
            label="Tag"
            value={ tag }
            onChange={ this.handleInputs }
            name="tag"
          />
          <Button onClick={ this.submitState } itemName="Adicionar despesa" />
        </form>
      </>
    );
  }
}

Wallet.propTypes = {
  emailState: PropTypes.string.isRequired,
  fetchCotacao: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  emailState: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCotacao: (currencies) => dispatch(fetchCurrent(currencies)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
