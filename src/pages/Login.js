import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <form>
          <img src="https://course.betrybe.com/images/trybe-logo-e10dbaaa26462aa149b81a924b00df07.png?vsn=d" alt="" />
          <input
            className="form-control"
            data-testid="email-input"
            type="email"
            placeholder="EMAIL"
          />
          <input
            className="form-control"
            data-testid="password-input"
            type="password"
            placeholder="SENHA"
          />
          <div className="btn-div">
            <button className="btn btn-success" type="submit">Entrar</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
