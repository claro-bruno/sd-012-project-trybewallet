import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import changeUser from '../actions';

// prettier-ignore
class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      typedEmail: '',
      passwordLength: 0,
    };

    this.handleEmailInsert = this.handleEmailInsert.bind(this);
    this.handlePasswordInsert = this.handlePasswordInsert.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleEmailInsert(event) {
    this.setState({
      typedEmail: event.target.value,
    });
  }

  handlePasswordInsert(event) {
    this.setState({
      passwordLength: event.target.value.length,
    });
  }

  handleClick() {
    const { changeEmail, callback } = this.props;
    const { typedEmail } = this.state;
    changeEmail(typedEmail);
    callback();
  }

  render() {
    const { typedEmail, passwordLength } = this.state;
    const passwordMinLength = 6;
    const btnClass = 'pure-material-button-contained';
    const validEmail = () => {
      if (typedEmail.includes('@') && typedEmail.includes('.com')) {
        return true;
      }
      return false;
    };
    const validPassword = () => {
      if (passwordLength >= passwordMinLength) { return true; } return false;
    };
    return (
      <article id="login-box" className="form__group">
        <h2>Trybe Wallet</h2>
        <label htmlFor="email-input">
          E-mail:
          <input
            type="text"
            data-testid="email-input"
            id="email-input"
            className="form__field"
            onChange={ this.handleEmailInsert }
          />
        </label>
        <label htmlFor="password-input">
          Senha:
          <input
            type="password"
            data-testid="password-input"
            id="password-input"
            className="form__field"
            onChange={ this.handlePasswordInsert }
          />
        </label>
        {validEmail() && validPassword() ? (
          <button
            className={ btnClass }
            type="button"
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        ) : (
          <button className={ btnClass } type="button" disabled>Entrar</button>
        )}
      </article>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  changeEmail: (value) => {
    dispatch(changeUser(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

LoginForm.propTypes = {
  callback: PropTypes.func.isRequired,
  changeEmail: PropTypes.func.isRequired,
};
