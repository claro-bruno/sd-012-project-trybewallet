import React from 'react';
// Usando Material-UI
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

class Login extends React.Component {
  render() {
    return (
      <div>
        <Container component="main" maxWidth="xs">
          <div className="mt-3 mt-md-5">
            <div className="text-center">
              <Typography className="mt-3" component="h1" variant="h6">
                Login Trybe Wallet
              </Typography>
            </div>
            <div className="mt-4">
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="username"
                type="email"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                label="Senha"
                name="password"
                type="password"
              />
              <Button
                type="button"
                variant="containerd"
                color="primary"
                fullWidth
                size="large"
                className="mb-3 mb-md-4 mt-4"
              >
                Entrar
              </Button>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Login;
