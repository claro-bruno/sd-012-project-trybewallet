import React from 'react';
import { connect } from 'react-redux';
import { userEmail, userPwd } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitUser = this.handleSubmitUser.bind(this);
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  handleSubmitUser() {
    const { submitEmail, submitPwd } = this.props;
    const { email, password } = this.state;
    submitEmail(email);
    submitPwd(password);
  }

  render() {
    const { email, password } = this.state;
    console.log(this.props);
    return (
      <section>
        <div>
          <label htmlFor="email" data-testid="email-input">
            Email:
            <input
              type="text"
              id="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="password" data-testid="password-input">
            Senha:
            <input
              type="password"
              id="password"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <button type="submit" onClick={ this.handleSubmitUser }>Entrar</button>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    submitEmail: (email) => dispatch(userEmail(email)),
    submitPwd: (pwd) => dispatch(userPwd(pwd)),
  });

export default connect(null, mapDispatchToProps)(Login);
