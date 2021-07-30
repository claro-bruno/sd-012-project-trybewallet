import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Login extends Component {
  render() {
    return (
      <div>
        OI - Login Page
      </div>
    );
  }
}

const mapDispatchToProps = {

};

export default connect(null, mapDispatchToProps)(Login);
