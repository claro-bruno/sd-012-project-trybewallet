import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import Header from './Header';
import { fetchApiAction } from '../actions/index';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchApi } = this.props;
    fetchApi();
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchApi: () => dispatch(fetchApiAction()),
});

export default connect(null, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  fetchApi: func.isRequired,
};
