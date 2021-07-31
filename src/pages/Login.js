import React from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../actions';

class Login extends React.Component {

  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  }

  handleClick = () => {
    const { Logar } = this.props;
    const { email } = this.state;
    Logar(email);
  }

  render() {
    return (
      <>
        <input
          data-testid="email-input"
          type="email"
          name="email"
          onChange={ this.handleChange }
        />
        <input
          data-testid="password-input"
          type="password"
          name="password"
          onChange={ this.handleChange }
        />
        <button onClick={ this.handleClick }>Entrar</button>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  Logar: (email) => dispatch(userLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);
