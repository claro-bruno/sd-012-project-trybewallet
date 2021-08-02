import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { novaDespesa, erro } from '../actions';
import ParteForm from './parteform';
import DetDespesas from './detalhesdespesa';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moedas: [],
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    };

    this.fetchMoedas = this.fetchMoedas.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.somatorio = this.somatorio.bind(this);
  }

  componentDidMount() {
    this.fetchMoedas();
  }

  onSubmitForm() {
    const { dispatchSetValue } = this.props;
    const { description, method, tag, value, currency } = this.state;
    dispatchSetValue({ description, method, tag, value, currency });
    this.setState({
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    });
  }

  somatorio() {
    const { despesas } = this.props;
    let soma = 0;
    const gastos = [];
    if (despesas.length === 0) {
      return soma;
    } if (despesas.length > 0) {
      soma = despesas[0].exchangeRates[despesas[0].currency].ask * despesas[0].value;
    } if (despesas.length > 1) {
      despesas.map((despesa) => gastos.push(parseFloat(
        despesa.exchangeRates[despesa.currency].ask * despesa.value,
      )));
      soma = gastos.reduce((total, atual) => total + atual);
    }
    return soma.toFixed(2);
  }

  async fetchMoedas() {
    const fetchMoedas = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await fetchMoedas.json();
    const moedas = Object.keys(json).filter((moeda) => moeda !== 'USDT');
    this.setState({ moedas });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email } = this.props;
    const { moedas, value, currency, description, tag, method } = this.state;
    return (
      <div>
        <header>
          <p data-testid="email-field" id="email">
            {email}
          </p>
          <p data-testid="total-field">{ this.somatorio() }</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <form>
          <DetDespesas
            moedas={ moedas }
            handleChange={ this.handleChange }
            description={ description }
            value={ value }
            currency={ currency }
          />
          <ParteForm
            tag={ tag }
            method={ method }
            handleChange={ this.handleChange }
          />
          <button type="button" onClick={ this.onSubmitForm }>
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  despesas: PropTypes.shape({
    length: PropTypes.number,
    map: PropTypes.func,
  }),
  dispatchSetValue: PropTypes.func,
  email: PropTypes.string,
}.isRequired;

const fetchDespesa = (state) => async (dispatch) => {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const json = await request.json();
  if (!json) return dispatch(erro);
  dispatch(novaDespesa({ ...state, exchangeRates: json }));
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (value) => dispatch(fetchDespesa(value)),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
  moedas: state.user.moedas,
  despesas: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
