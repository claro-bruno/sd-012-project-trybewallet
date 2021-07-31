import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    const { myUserState } = this.props;
    return (
      <section>
        <Header myUserState={ myUserState } />
      </section>
    );
  }
}

Wallet.propTypes = {
  myUserState: PropTypes.shape(PropTypes.string.isRequired).isRequired,
};

const mapStateToProps = (state) => ({
  myUserState: state.user,
});

export default connect(mapStateToProps)(Wallet);
