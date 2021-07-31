import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

  handleClick(event) {
    const { changeUser } = this.props;
    const { typedEmail } = this.state;
    event.preventDefault();
    changeUser(typedEmail);
  }

  render() {
    const { typedEmail, passwordLength } = this.state;
    const passwordMinLength = 6;
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
            className="form__field"
            onChange={ this.handleEmailInsert }
          />
        </label>
        <label htmlFor="password-input">
          Senha:
          <input
            type="password"
            data-testid="password-input"
            className="form__field"
            onChange={ this.handlePasswordInsert }
          />
        </label>
        {validEmail() && validPassword() ? (
          <button
            className="pure-material-button-contained"
            type="submit"
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        ) : (
          <button className="pure-material-button-contained" type="submit" disabled>
            Entrar
          </button>
        )}
      </article>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  changeUser: (value) => {
    dispatch({ type: 'CHANGE_USER', value });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

LoginForm.propTypes = {
  changeUser: PropTypes.func.isRequired,
};
