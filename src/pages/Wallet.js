import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { saveExpensesAsyncAction } from '../actions';

import InputAmount from '../components/InputAmount';
import InputCurrency from '../components/InputCurrency';
import InputDescription from '../components/InputDescription';
import InputMethod from '../components/InputMethod';
import InputTag from '../components/InputTag';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: -1,
      value: '0',
      currency: 'USD',
      exchangeRates: null,
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.totalCalculator = this.totalCalculator.bind(this);
  }

  onChangeHandler({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  onClickHandler(e) {
    e.preventDefault();
    const { DispatchSaveExpensesAsyncAction } = this.props;
    this.setState((state) => ({
      id: state.id + 1,
    }), () => DispatchSaveExpensesAsyncAction(this.state));
  }

  totalCalculator(wallet) {
    const res = wallet.expenses.reduce((acc, item) => {
      const curr = item.currency;
      const ask = parseFloat(item.exchangeRates[curr].ask);
      const value = parseFloat(item.value);
      acc += value * ask;
      return acc;
    }, 0);
    return res;
  }

  render() {
    const { user, wallet } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">{ user.email }</span>
          <span data-testid="total-field">{ this.totalCalculator(wallet) }</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <form action="#">
          <InputAmount onChangeHandler={ this.onChangeHandler } />
          <InputCurrency onChangeHandler={ this.onChangeHandler } />
          <InputMethod onChangeHandler={ this.onChangeHandler } />
          <InputTag onChangeHandler={ this.onChangeHandler } />
          <InputDescription onChangeHandler={ this.onChangeHandler } />
          <button
            onClick={ this.onClickHandler }
            type="submit"
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    user: state.user,
    wallet: state.wallet,
  }
);
const mapDispatchToProps = (dispatch) => (
  {
    DispatchSaveExpensesAsyncAction: (payload) => (
      dispatch(saveExpensesAsyncAction(payload))
    ),
  }
);
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  wallet: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  DispatchSaveExpensesAsyncAction: PropTypes.func.isRequired,
};
