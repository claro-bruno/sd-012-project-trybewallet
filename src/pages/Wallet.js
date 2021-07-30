import React from 'react';
import HeaderComponent from '../components/HeaderComponents';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseTable from '../components/ExpenseTable';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currencies: [],
    };

    this.currencies = this.currencies.bind(this);
  }

  componentDidMount() {
    this.currencies();
  }

  async currencies() {
    const URL = 'https://economia.awesomeapi.com.br/json/all';

    const fetchApiResquest = await fetch(URL);
    const jsonResponse = await fetchApiResquest.json();
    const allCurrencies = Object.keys(jsonResponse);
    this.setState({
      currencies: [...allCurrencies],
    });
  }

  render() {
    const { currencies } = this.state;
    return (
      <div>
        <HeaderComponent />
        <ExpenseForm currencies={ currencies } />
        <ExpenseTable />
      </div>
    );
  }
}

export default Wallet;
