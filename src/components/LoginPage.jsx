import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from './subcomponents/LoginForm';
import troubledJulius from '../img/troubled-julius.png';

// prettier-ignore
class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };

    this.verifyLogIn = this.verifyLogIn.bind(this);
  }

  verifyLogIn() {
    this.setState({
      loggedIn: true,
    });
  }

  render() {
    const { loggedIn } = this.state;
    if (loggedIn) {
      return <Redirect to="/carteira" />;
    }
    return (
      <section id="login-page">
        <img src={ troubledJulius } alt="Julius" id="julius-hero" />
        <LoginForm callback={ this.verifyLogIn } />
      </section>
    );
  }
}

export default LoginPage;
