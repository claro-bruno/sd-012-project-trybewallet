import React from 'react';
import LoginForm from './subcomponents/LoginForm';
import troubledJulius from '../img/troubled-julius.png';

// prettier-ignore
class LoginPage extends React.Component {
  render() {
    return (
      <setion id="login-page">
        <img src={ troubledJulius } alt="Julius" id="julius-hero" />
        <LoginForm />
      </setion>
    );
  }
}

export default LoginPage;
