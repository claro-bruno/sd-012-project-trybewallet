import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserLogin } from '../redux/actions';
// import './Login.css'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailstate: '',
      passwordstate: '',
    };
  }

  render() {
    const { email, password } = this.props;
    console.log(email, password);
    const { emailstate, passwordstate } = this.state;
    console.log(emailstate, passwordstate);
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

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
