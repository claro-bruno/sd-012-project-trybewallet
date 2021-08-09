import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';
import WalletHeader from '../Components/WalletHeader';
import WalletNewForm from '../Components/WalletNewForm';
import ExpensesTable from '../Components/ExpensesTable';

class Wallet extends React.Component {
  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  render() {
    return (
      <div>
        <WalletHeader />
        <WalletNewForm />
        <ExpensesTable />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrencies: () => dispatch(fetchCurrencies()),
});

Wallet.propTypes = {
  setCurrencies: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
