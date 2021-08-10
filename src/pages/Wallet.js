import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/Form';
import Header from '../components/Header';

class Wallet extends React.Component {
  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <Header />
        <Form />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

Wallet.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,

};

export default connect(mapStateToProps, null)(Wallet);
