import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '../components/Button';
import Input from '../components/Input';
import { addEmail } from '../actions/actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isValid: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validationInfo = this.validationInfo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange({ target: { name, value } }) {
  //   this.setState((state) => ({
  //     ...state,
  //     [name]: value,
  //   }), () => this.setState({
  //     disable: this.validationInfo(),
  //   }));
  // }

  handleChange({ target: { name, value } }) {
    this.setState((state) => ({
      ...state,
      [name]: value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const { saveEmail } = this.props;
    const { email } = this.state;
    saveEmail(email);

    this.setState({
      isValid: true,
    });
  }

  // código de veirificação de email pego no site => https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
  validationInfo() {
    const { email, password } = this.state;
    const validEmail = /\S+@\S+\.\S+/;
    const minLenght = 6;
    if (validEmail.test(email) && (minLenght <= password.length)) {
      return false;
    }
    return true;
  }

  render() {
    const { email, password, isValid } = this.state;
    if (isValid) {
      return <Redirect to="/carteira" />;
    }
    // o Redirect só vai funcionar depois que a função handleSubmit fizer o isValid ser true
    return (
      <form onSubmit={ this.handleSubmit }>
        <Input
          label="Email"
          dataTestId="email-input"
          type="email"
          id="email-label"
          name="email"
          value={ email }
          onChange={ this.handleChange }
        />
        <Input
          label="Senha"
          dataTestId="password-input"
          type="password"
          id="password-label"
          name="password"
          value={ password }
          onChange={ this.handleChange }
        />
        <Button
          disable={ this.validationInfo() }
          name="button"
          label="Entrar"
        />
      </form>
    );
  }
}
Login.propTypes = {
  saveEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (email) => dispatch(addEmail(email)),
}); // esse "email" é o valor do email escrito

export default connect(null, mapDispatchToProps)(Login);
// conecta com o redux
