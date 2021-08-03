import React from 'react';
import Header from '../components/Header';
import OutGoing from '../components/OutGoing';
import { connect } from 'react-redux';
import { walletSubmit } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchApi } = this.props;
    fetchApi();
  }

  render() {
    const { userEmail, currencies } = this.props;
    return (
      <div className="WalletBody">
        <Header
          userEmail={ userEmail } 
        />
        <OutGoing
          currencies={ currencies }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userEmail: state.user.email,
    currencies: state.wallet.currencies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchApi: () => dispatch(walletSubmit())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
