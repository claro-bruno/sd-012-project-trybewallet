import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Login extends React.Component {
  render() {
    return (
      <form>
        <TextField
          label="Email"
          variant="outlined"
          data-testid="email-input"
        />
        <TextField
          label="Password"
          type="password"
          autoComplete="current-password"
          data-testid="password-input"
          variant="outlined"
        />
        <Button variant="outlined" color="primary">
          Entrar
        </Button>
      </form>
    );
  }
}

export default Login;
