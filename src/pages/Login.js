import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailCheck: false,
      passwordCheck: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.checkButton = this.checkButton.bind(this);
  }

  handleChange(e) {
    const email = e.target.value;
    if (email.match(/^[a-z0-9_]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/) != null) {
      this.setState({ emailCheck: true });
    } else {
      this.setState({ emailCheck: false });
    }
  }

  handlePassword(e) {
    const senha = e.target.value;
    const passwordMinLength = 5;
    if (senha.length > passwordMinLength) {
      this.setState({ passwordCheck: true });
    } else {
      this.setState({ passwordCheck: false });
    }
  }

  checkButton() {
    const { emailCheck, passwordCheck } = this.state;
    return !(emailCheck && passwordCheck);
  }

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
            onChange={ this.handleChange }
          />
          <input
            className="form-control"
            data-testid="password-input"
            type="password"
            placeholder="SENHA"
            onChange={ this.handlePassword }
          />
          <div className="btn-div">
            <button
              className="btn btn-success"
              type="submit"
              disabled={ this.checkButton() }
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
