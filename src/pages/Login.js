import React from 'react';
import PropTypes from 'prop-types';
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
    };
    this.handleChange = this.handleChange.bind(this);
    this.validationInfo = this.validationInfo.bind(this);
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

  handleSaveInfo() {
    const { changeEmail } = this.props;
    const { email } = this.state;
    changeEmail(email);
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
    const { email, password } = this.state;
    console.log(this.props);
    return (
      <div>
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
          onClick={ this.handleChange }
          label="Entrar"
        />
      </div>
    );
  }
}
Login.propTypes = {
  changeEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeEmail: (email) => dispatch(addEmail(email)),
}); // esse "email" é o valor do email escrito

export default connect(null, mapDispatchToProps)(Login);
// conecta com oredux
