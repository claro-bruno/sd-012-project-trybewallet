import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import { actionChangeEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      email: '',
      password: '',
      button: false,
    });

    this.handleChange = this.handleChange.bind(this);
    this.checkButton = this.checkButton.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  checkButton() {
    const { email, password } = this.state;
    const passwordLength = 6;
    const pattern = /(.*)@(.*).com/; // Fonte: https://trybecourse.slack.com/archives/C01T2C18DSM/p1627671711058500?thread_ts=1627667851.053100&cid=C01T2C18DSM
    const condition = password.length >= passwordLength && pattern.test(email);
    return condition;
  }

  handleClick() {
    const { changeEmail } = this.props;
    const { email } = this.state;
    changeEmail(email);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password, button } = this.state;
    return (
      <>
        <Input
          label="E-mail :"
          name="email"
          type="email"
          testid="email-input"
          id="email-input"
          value={ email }
          onChange={ this.handleChange }
        />

        <Input
          label="Password: "
          name="password"
          type="password"
          testid="password-input"
          id="password-input"
          value={ password }
          onChange={ this.handleChange }
        />

        <Link to="/carteira">
          <button
            type="submit"
            disabled={ !(this.checkButton()) }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </Link>

      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => (
  {
    changeEmail: (value) => dispatch(actionChangeEmail(value)),
  }
);

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  changeEmail: PropTypes.func.isRequired,
};
