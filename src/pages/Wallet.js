import React from 'react';
import Header from '../components/Header';
import Form1 from '../components/FormPart1';
import Form2 from '../components/FormPart2';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.fetchAPI = this.fetchAPI.bind(this);
    this.state = {
      coins: [],
    };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    const getapi = await fetch(URL);
    const getjson = await getapi.json();
    const filteredCoin = Object.keys(getjson);
    const coins = filteredCoin.filter((coin) => !coin.includes('USDT'));
    this.setState({ coins });
  }

  render() {
    const { coins } = this.state;
    return (
      <div>
        <nav>
          <Header />
          <Form1 coins={ coins } />
          <Form2 coins={ coins } />
        </nav>
      </div>
    );
  }
}

export default Wallet;
