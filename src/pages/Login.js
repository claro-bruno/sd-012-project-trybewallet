import React from 'react';

import Input from '../components/Input';

class Login extends React.Component {
  render() {
    return (
      <main>
        <div className="card ml-auto mr-auto" style={ { width: '18rem' } }>
          <img
            src="https://img.freepik.com/free-vector/brown-leather-wallet-with-lots-money_68708-304.jpg?size=626&ext=jpg"
            className="card-img-top"
            alt="Wallet"
          />
          <div className="card-body">
            <form className="d-flex flex-column">
              <Input label="Email: " id="email-input" type="email" />
              <Input label="Password: " id="password-input" type="text" />
              <button className="btn btn-primary mt-3" type="button">Entrar</button>
            </form>
          </div>
        </div>
      </main>
    );
  }
}

export default Login;
