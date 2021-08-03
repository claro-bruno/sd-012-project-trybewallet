import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
// import { saveExpensesAction } from '../actions';
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
      amount: 0,
      currency: 'USD',
      exchangeRates: null,
      method: 'cash',
      tag: 'food',
      description: '',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onChangeHandler({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  onClickHandler() {
    const { DispatchSaveExpensesAsyncAction } = this.props;
    DispatchSaveExpensesAsyncAction(this.state);
  }

  render() {
    const { user, expenses } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">{ user.email }</span>
          <span data-testid="total-field">0</span>
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
    expenses: state.expenses,
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
  DispatchSaveExpensesAsyncAction: PropTypes.func.isRequired,
};
