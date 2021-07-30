import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import Input from '../components/Input';
import { setUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange({ target: { type, value } }) {
    this.setState({ [type]: value });
  }

  render() {
    const { email } = this.state;
    const { userAction } = this.props;
    return (
      <div>
        <Input
          data-testid="email-input"
          type="email"
          label="Email"
          regex={ /^[\w_.]{4,}@[a-z]{5,}\.com(\.br)?$/ }
          message="Formato inválido, use algo como 'alguem@alguem.com'."
          onChange={ this.onChange }
        />
        <Input
          data-testid="password-input"
          type="password"
          label="Senha"
          regex={ /^.{6,}$/ }
          message="No minimo 6 caracteres"
          onChange={ this.onChange }
        />
        <Link to="/carteira">
          <Button
            value="Entrar"
            onClick={ () => userAction(email) }
          />
        </Link>
      </div>
    );
  }
}

Login.propTypes = {
  userAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  userAction: (email) => dispatch(setUser(email)),
});

export default connect(null, mapDispatchToProps)(Login);
