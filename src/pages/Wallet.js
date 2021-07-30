import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import ExpenseForm from '../components/ExpenseForm';


class Wallet extends React.Component {
  componentDidMount() {
    fetch('https://economia.awesomeapi.com.br/json/all')
    .then(response => response.json())
    .then(data => console.log(data));
  }

  render() {
    return (
      <div>
        <Header />
        <ExpenseForm />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrencies: (currencies) => dispatch(action(currencies)),
});

export default connect(null, mapDispatchToProps)(Wallet);
