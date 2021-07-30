import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormWallet from '../components/FormWallet';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      descricao: '',
      moeda: '',
      moedas: [''],
      metodo: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchMoedas();
  }

  async fetchMoedas() {
    const fetchMoedas = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await fetchMoedas.json();
    const moedasKeys = Object.keys(json);
    const moedas = moedasKeys.filter((moeda) => moeda !== 'USDT');
    this.setState({ moedas });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email } = this.props;
    const { moeda, moedas, value, descricao, tag, metodo } = this.state;
    return (
      <div>
        <header>
          <h3 data-testid="email-field">{ email }</h3>
          <span data-testid="total-field">0</span>
          <h3 data-testid="header-currency-field">BRL</h3>
        </header>
        <FormWallet
          moedas={ moedas }
          handleChange={ this.handleChange }
          value={ value }
          descricao={ descricao }
          moeda={ moeda }
          metodo={ metodo }
          tag={ tag }
        />
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  email: user.email,
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;
