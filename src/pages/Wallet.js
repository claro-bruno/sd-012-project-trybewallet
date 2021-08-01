import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import Header from '../components/header';
import FormWallet from '../components/formWallet';

class Wallet extends React.Component {
  /* constructor(props) {
    super(props);
    console.log(this.props);
    const { location: { state: { user: { email } } } } = this.props;
    this.state = {
      email,
    };
  } */

  render() {
    return (
      <section>
        <Header />
        <FormWallet />
      </section>
    );
  }
}

export default Wallet;

/* Wallet.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      user: PropTypes.shape({
        email: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
}; */
