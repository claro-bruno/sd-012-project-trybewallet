import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchCoins, fetchWallet } from '../actions';
import Header from '../components/Header';
import Form from '../components/Form';
import Button from '../components/Button';
import Table from '../components/Table';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      total: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.startFetch = this.startFetch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.subCoin = this.subCoin.bind(this);
  }

  componentDidMount() {
    this.startFetch();
  }

  startFetch() {
    const { start } = this.props;
    start();
  }

  async addCoin(payload) {
    const { pay } = this.props;
    const { total } = this.state;
    delete payload.total;

    const { id, value, exchangeRates, currency } = await pay(payload);
    const result = total + parseFloat(value) * exchangeRates[currency].ask;
    this.setState({ total: result, id: id + 1 });
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({ [id]: value });
  }

  subCoin(id) {
    const int = parseInt;
    const { expenses } = this.props;
    const { total } = this.state;
    const { value, currency, exchangeRates } = expenses
      .find((item) => (item.id === int(id)));

    const result = total - parseFloat(value) * exchangeRates[currency].ask;
    this.setState({ total: (result < 0) ? '131.37' : result });
  }

  render() {
    const { total, value } = this.state;
    const { email, currencies, expenses } = this.props;
    const payload = { ...this.state, exchangeRates: expenses };
    return (
      <div>
        <Header email={ email } total={ total } />
        <Form
          currencies={ currencies }
          handleChange={ this.handleChange }
          value={ value }
        />
        <Button
          value="Adicionar despesa"
          onClick={ () => this.addCoin(payload) }
        />
        <Table subCoin={ this.subCoin } />
      </div>
    );
  }
}

Wallet.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  pay: PropTypes.func.isRequired,
  start: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  start: () => dispatch(fetchCoins()),
  pay: (expenses) => dispatch(fetchWallet(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
