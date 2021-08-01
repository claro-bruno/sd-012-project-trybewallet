import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import Header from './Header';
import { fetchContainUrl } from '../actions/index';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchContain } = this.props;
    fetchContain();
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
  fetchContain: () => dispatch(fetchContainUrl()),
});

export default connect(null, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  fetchContain: func.isRequired,
};
