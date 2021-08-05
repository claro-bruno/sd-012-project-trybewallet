import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: 0,
      descricao: '',
      moeda: '',
      moedas: [''],
      metodo: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.fetchMoedas = this.fetchMoedas.bind(this);
  }

  componentDidMount() {
    this.fetchMoedas();
  }

  async fetchMoedas() {
    const respJson = await fetch('https://economia.awesomeapi.com.br/json/all');
    const moedasObj = await respJson.json();
    const moedas = Object.keys(moedasObj).filter((moeda) => moeda !== 'USDT');
    this.setState({ moedas });
  }

  handleChange({ target: { name, value } }) {
    this.setState((state) => ({
      ...state,
      [name]: value,
    }));
  }

  render() {
    const { moedas, valor, moeda, descricao, tag, metodo } = this.state;
    return (
      <div>
        <Header />
        <Form
          moedas={ moedas }
          handleChange={ this.handleChange }
          valor={ valor }
          descricao={ descricao }
          moeda={ moeda }
          metodo={ metodo }
          tag={ tag }
        />
      </div>
    );
  }
}

export default Wallet;
