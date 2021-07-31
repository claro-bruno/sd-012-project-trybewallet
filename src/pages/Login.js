import React from 'react';
// Usando Material-UI
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password, disabled, userEmail } = this.state;
    return (
      <form onSubmit={ this.onSubmitForm }>
        <Container component="main" maxWidth="xs">
          <div className="text-center">
            <Typography className="mt-3" variant="h6">Login Trybe Wallet</Typography>
          </div>
          <input
            data-testid="email-input"
            id="email"
            label="Email"
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            data-testid="password-input"
            required
            id="password"
            label="Senha"
            type="password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
          />
          <Link to="/carteira" onClick={ () => userEmail({ email }) }>

            <Button
              fullWidth
              size="large"
              disabled={ disabled }
            >
              Entrar
            </Button>
          </Link>
        </Container>
      </form>

    );
  }
}
const mapDispatchToProps = (dispatch) => ({

  stateSave: (payload) => dispatch({ type: 'USER_STATE', payload }),
});

Login.propTypes = {
  stateSave: PropTypes.func,
}.isRequered;

export default connect(null, mapDispatchToProps)(Login);
// export default Login;
