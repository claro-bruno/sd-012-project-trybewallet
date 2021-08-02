import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return <p>{email}</p>;
  }
}

const mapState = (state) => ({
  email: state.user.email,
});

export default connect(mapState, null)(Wallet);
