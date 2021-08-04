import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import saveLogin from '../actions/saveLogin';

class Home extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.disabledButton = this.disabledButton.bind(this);

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value,
      },
      () => this.disabledButton(),
    );
  }

  disabledButton() {
    const { email, password } = this.state;
    const jonas = 6;
    if (email.includes('@') && email.includes('.com') && password.length >= jonas) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  render() {
    const { email, password, disabled } = this.state;
    const { setLoginStore, history } = this.props;
    // console.log(this.props);
    return (
      <form>
        <label htmlFor="email">
          Email:
          {' '}
          <input
            value={ email }
            name="email"
            id="email"
            data-testid="email-input"
            type="email"
            onChange={ this.handleChange }
            required
          />
        </label>
        <br />
        <br />
        <label htmlFor="password">
          Senha:
          {' '}
          <input
            value={ password }
            name="password"
            id="password"
            data-testid="password-input"
            type="password"
            required
            minLength="6"
            onChange={ this.handleChange }
          />
        </label>
        <button
          disabled={ disabled }
          type="button"
          onClick={ () => setLoginStore(email, password) && history.push('/carteira') }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setLoginStore: (email, password) => dispatch(saveLogin(email, password)),
});

Home.propTypes = {
  setLoginStore: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Home);
