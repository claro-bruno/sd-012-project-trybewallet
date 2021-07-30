import React from 'react';
import { connect } from 'react-redux';
import { actionChangeEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleNextPage = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleNextPage() {
    const { history, emailValue } = this.props;
    emailValue(this.state);
    history.push('/carteira');
  }

  render() {
    const { email, senha } = this.state;
    return (
      <div>
        <div>
          <input
            value={ email }
            onChange={ this.handleChange }
            type="text"
            name="email"
            data-testid="email-input"
          />
          <input
            type="password"
            name="senha"
            value={ senha }
            onChange={ this.handleChange }
            data-testid="password-input"
          />
          <input onClick={ this.handleNextPage } type="button" value="Entrar" />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailValue: (value) => dispatch(actionChangeEmail(value)),
});

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps, mapDispatchToProps)(Login);
