import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import Button from '../components/Button';
import { actionOnChange } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { actionChange } = this.props;
    const { name, value } = target;
    actionChange(name, value);
  }

  render() {
    const { email, senha, isValid } = this.props;
    return (
      <div>
        <img src="" alt="" />
        <Input
          label="Email"
          type="text"
          value={ email }
          name="email"
          onChange={ this.handleChange }
          testId="email-input"
        />
        <Input
          label="Senha"
          type="text"
          value={ senha }
          name="senha"
          onChange={ this.handleChange }
          testId="password-input"
        />
        <Link to="/carteira">
          <Button
            text="Entrar"
            name="login"
            onClick={ () => {} }
            isValid={ isValid }
          />
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  senha: state.user.senha,
  isValid: state.user.isValid,
});

const mapDispatchToProps = (dispatch) => ({
  actionChange: (...info) => dispatch(actionOnChange(...info)),
});

Login.propTypes = {
  email: PropTypes.string.isRequired,
  senha: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired,
  actionChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
