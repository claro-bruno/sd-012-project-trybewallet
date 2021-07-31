import React from 'react';
import { connect } from 'react-redux';
import { getUserLogin } from '../redux/actions';
// import './Login.css'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

render() {
    const { email, password } = this.props;
    console.log(this.props);
    return (
      <div>
        <h1>LOGIN</h1>
        <input
          type="text"
          name="email"
          placeholder="E-MAIL DO USUÁRIO"
          data-testid="email-input"
        />
        <input
          type="text"
          name="password"
          placeholder="SENHA"
          data-testid="password-input"
        />
        <button type="button">ENTRAR</button>
      </div>
    );
  }
}

// LER
const mapStateToProps = (state) => ({
  email: state.email,
  password: state.password,
});

// ESCREVER
const mapDispatchToProps = (dispatch) => ({
  getUser: (user) => dispatch(getUserLogin(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
