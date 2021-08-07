import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import OutGoing from '../components/OutGoing';
import { walletSubmit } from '../actions';
import Loading from '../components/Loading';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchApi } = this.props;
    fetchApi();
  }

  render() {
    const { loading } = this.props;

    if (loading === true) {
      return <Loading />;
    }

    return (
      <div className="WalletBody">
        <Header />
        <OutGoing />
      </div>
    );
  }
}

Wallet.propTypes = {
  loading: PropTypes.bool.isRequired,
  fetchApi: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.wallet.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchApi: () => dispatch(walletSubmit()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
