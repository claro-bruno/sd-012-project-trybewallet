import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WalletHead from '../components/WalletHead';
import ValueInput from '../components/WalletForm/ValueInput';
import DescribeInput from '../components/WalletForm/DescribeInput';
import CurrencySelect from '../components/WalletForm/CurrencySelect';
import PaymentSelect from '../components/WalletForm/PaymentSelect';
import TagSelect from '../components/WalletForm/TagSelect';
import AddExpenses from '../components/AddExpenses';
import fetchCurrenciesExpenses from '../Api/fetchCurrenciesExpenses';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.storeState = this.storeState.bind(this);
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  storeState() {
    const { value, description, currency, method, tag } = this.state;
    const { storeExpenses } = this.props;
    storeExpenses({ value, description, currency, method, tag });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        <WalletHead />
        <form>
          <ValueInput value={ value } onChange={ this.handleChange } />
          <DescribeInput value={ description } onChange={ this.handleChange } />
          <CurrencySelect value={ currency } onChange={ this.handleChange } />
          <PaymentSelect value={ method } onChange={ this.handleChange } />
          <TagSelect value={ tag } onChange={ this.handleChange } />
        </form>
        <AddExpenses storeState={ this.storeState } />
      </div>
    );
  }
}

Wallet.propTypes = {
  storeExpenses: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  storeExpenses: (data) => dispatch(fetchCurrenciesExpenses(data)),
});

export default connect(null, mapDispatchToProps)(Wallet);
