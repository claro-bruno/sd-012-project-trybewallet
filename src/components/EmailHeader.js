import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';

class EmailDisplay extends Component {
  render() {
    const { email } = this.props;
    return (
      <p
        data-testid="email-field"
      >
        { email }
      </p>
    );
  }
}

EmailDisplay.propTypes = {
  email: string.isRequired,
};

const mapStateToProps = ({ user }) => ({
  email: user.email,
});

export default connect(mapStateToProps, null)(EmailDisplay);
