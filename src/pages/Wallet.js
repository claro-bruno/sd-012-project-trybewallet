import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getMoedas } from '../actions';
import ParteForm from './parteform';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moedas: [''],
    };
    this.fetchMoedas = this.fetchMoedas.bind(this);
  }

  componentDidMount() {
    this.fetchMoedas();
  }

  async fetchMoedas() {
    const fetchMoedas = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await fetchMoedas.json();
    const moedas = Object.keys(json).filter((moeda) => moeda !== 'USDT');
    this.setState({ moedas });
  }

  render() {
    const { email } = this.props;
    const { moedas } = this.state;
    return (
      <div>
        <header>
          <p data-testid="email-field" id="email">{ email }</p>
          <p data-testid="total-field"> 0 </p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <form>
          <label htmlFor="valor">
            valor
            <input id="valor" />
          </label>
          <label htmlFor="descrição">
            descrição
            <textarea type="text" id="descrição" name="descrição" />
          </label>
          <label htmlFor="moeda">
            moeda
            <select id="moeda">
              {
                moedas.map((m, i) => <option key={ i } value={ m }>{ m }</option>)
              }
            </select>
          </label>
          <ParteForm />
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (value) => dispatch(getMoedas(value)),
}
);

const mapStateToProps = (state) => ({
  email: state.user.email,
  moedas: state.user.moedas,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
