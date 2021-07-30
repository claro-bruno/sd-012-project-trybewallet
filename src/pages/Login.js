import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Input from '../components/Input';
import actionLogin from '../actions/actionLogin';

class Login extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.validation = this.validation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      email: '',
      password: '',
      shouldRedirect: false,
    };
  }

  validation() {
    const { email, password } = this.state;
    const emailVerify = /\S+@\S+\.\S+/;
    const passwordFormat = 6;
    if (emailVerify.test(email) && password.length >= passwordFormat) {
      return false;
    }
    return true;
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState(({ [name]: value }), () => ({
      disable: this.validation(),
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email } = this.state;
    const { emailDefault } = this.props;
    emailDefault(email);
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { email, password, shouldRedirect } = this.state;

    if (shouldRedirect) return <Redirect to="/carteira" />;

    return (
      <form onSubmit={ this.handleSubmit }>
        <Input
          type="email"
          message="email"
          value={ email }
          handleChange={ this.handleChange }
        />
        <Input
          type="password"
          value={ password }
          message="password"
          handleChange={ this.handleChange }
        />
        <button
          type="submit"
          disabled={ this.validation() }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  emailDefault: propTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  emailDefault: (email) => dispatch(actionLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);
