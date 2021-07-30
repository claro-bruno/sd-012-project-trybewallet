import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div className="align-self-center ml-auto mr-auto col-4 mt-5 pt-5">
        <div className="form-container mr-5">
          <h1>Trybe Wallet</h1>
          <form>
            <div className="mb-3">
              <input
                type="email"
                className="form-control mt-3"
                id="email-input"
                placeholder="Email"
                data-testid="email-input"
              />
              <input
                type="password"
                className="form-control mt-3"
                id="password-input"
                aria-describedby="emailHelp"
                placeholder="Senha"
                data-testid="password-input"
              />
            </div>
            <button type="submit" className="btn btn-danger col-12">Entrar</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
