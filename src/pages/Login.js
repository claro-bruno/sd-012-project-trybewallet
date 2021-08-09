import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import Button from '../components/Button';
import { actionUserEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.validUser = this.validUser.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,

    });
  }

  validUser() {
    const { email, password } = this.state;
    const validEmail = (/^[a-z0-9_]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/).test(email);
    const validPassword = 6;

    return !(validEmail && password.length >= validPassword);

    // logica feita com ajuda do repositorio de Daniel Batista, link: https://github.com/tryber/sd-012-project-trybewallet/pull/19/commits/b891cd799dbfaa9ebed53d304933f6b56ff106f9
  }

  render() {
    const { email, password } = this.state;
    const { handlerUser } = this.props;

    return (
      <div className="login">
        <Input
          label="Email"
          datatestid="email-input"
          type="email"
          value={ email }
          name="email"
          onChange={ this.handleChange }
        />

        <Input
          label="Password"
          datatestid="password-input"
          type="password"
          value={ password }
          name="password"
          onChange={ this.handleChange }
        />
        <Link to="/carteira">
          <Button
            name="Entrar"
            onClick={ () => { handlerUser(email); } }
            disabled={ this.validUser() }
          />
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handlerUser: (email) => dispatch(actionUserEmail(email)),
});

Login.propTypes = {
  handlerUser: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
