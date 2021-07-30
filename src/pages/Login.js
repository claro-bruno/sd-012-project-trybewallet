import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionChangeEmail } from '../actions';
import { Button } from '../components/Button';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
      isDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
    this.ableBtn = this.ableBtn.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.ableBtn());
  }

  handleNextPage() {
    const { history, emailValue } = this.props;
    emailValue(this.state);
    history.push('/carteira');
  }

  ableBtn() {
    const { email, senha } = this.state;
    const minChars = 5;
    const isDisabled = !(/\S+@\S+\.\S+/.test(email) && senha.length > minChars);
    this.setState({ isDisabled });
    // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  }

  render() {
    const { email, senha, isDisabled } = this.state;
    return (
      <div>
        <div>
          <input
            value={ email }
            onChange={ this.handleChange }
            type="email"
            name="email"
            data-testid="email-input"
            required
          />
          <input
            type="password"
            name="senha"
            value={ senha }
            onChange={ this.handleChange }
            data-testid="password-input"
            required
          />
          <Button
            value="Entrar"
            disabled={ isDisabled }
            onClick={ this.handleNextPage }
          />
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  emailValue: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  emailValue: (value) => dispatch(actionChangeEmail(value)),
});

const mapStateToProps = (state) => ({ user: state.user.user });

export default connect(mapStateToProps, mapDispatchToProps)(Login);
