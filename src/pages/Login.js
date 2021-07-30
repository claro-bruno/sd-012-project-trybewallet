import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
  render() {
    return (
      <div className="login">
        OI - Login Page
      </div>
    );
  }
}

const mapDispatchToProps = {

};

export default connect(null, mapDispatchToProps)(Login);
