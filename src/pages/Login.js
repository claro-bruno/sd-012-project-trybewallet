import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    // Não chame this.setState() aqui!
    this.verify = this.verify.bind(this);
    this.enablebutton = this.enablebutton.bind(this);
    this.state = {
      lokedButton: 'true',
      emailText: '',
      passwordText: '',
    };
  }

  componentDidUpdate(){
    enablebutton() {
      this.setState({ lokedButton: 'false' });
    }
  }

  verify({ target }) {
    const { name, value } = target;
    const { emailText, passwordText } = this.state;
    this.setState({ [name]: value });
    const validName = 'alguem@email.com';
    const validPassword = '123456';
    //if (emailText === validName && passwordText === validPassword) {
     // this.enablebutton();
    //}
  }

  render() {
    const { lokedButton } = this.state;
    return (
      <div>
        <input
          type="text"
          data-testid="email-input"
          placeholder="email"
          name="emailText"
          onChange={ this.verify }
        />
        <input
          type="password"
          data-testid="password-input"
          placeholder="senha"
          name="passwordText"
          onChange={ this.verify, this.enablebutton }
        />
        <button
          disabled={ lokedButton }
          type="button"
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
