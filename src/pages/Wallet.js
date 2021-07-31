import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <section>
        { email }
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.state,
});

Wallet.propType = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
