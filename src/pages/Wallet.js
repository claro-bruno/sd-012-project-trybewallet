import React from 'react';
import Form from '../components/Form';
import Header from '../components/Header';

const api = 'https://economia.awesomeapi.com.br/json/all';
class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: [],
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const response = await fetch(api);
    const data = await response.json();
    console.table(Object.keys(data));
    this.setState({
      coins: Object.keys(data).filter((coin) => coin !== 'USDT'),
    });
  }

  render() {
    const { coins } = this.state;
    return (
      <div>
        <Header />
        <Form coins={ coins } />
      </div>
    );
  }
}

export default Wallet;
