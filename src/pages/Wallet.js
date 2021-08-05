import React from 'react';
import WalletHead from '../components/WalletHead';
import ValueInput from '../components/WalletForm/ValueInput';
import DescribeInput from '../components/WalletForm/DescribeInput';
import CurrencySelect from '../components/WalletForm/CurrencySelect';
import PaymentSelect from '../components/WalletForm/PaymentSelect';
import TagSelect from '../components/WalletForm/TagSelect';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    /* this.state = {
      value: '',
      describe: '',
      currencies: [],
      expenses: [],
    }; */

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  render() {
    return (
      <div>
        <WalletHead />
        <form>
          <ValueInput onChange={ this.handleChange } />
          <DescribeInput onChange={ this.handleChange } />
          <CurrencySelect />
          <PaymentSelect />
          <TagSelect />
        </form>
      </div>
    );
  }
}

export default Wallet;
