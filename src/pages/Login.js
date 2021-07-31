import React from 'react';
// Usando Material-UI
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleChangeSubmit = this.handleChangeSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  validation() {
    const { email, password } = this.setState;
    const Regex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    const number = 5;
    const disabled = !(Regex.test(email) && password.length > number);
    this.setState({ disabled });
  }

  /*
  onSubmitForm=(e)=>{
    e.preventDefaut();
    console.log('clicou!')
  }
  */
  /*
  handleChangeSubmit(){
  .push('/carteira')
  }
*/
  render() {
    const { email, password, disabled, userEmail } = this.state;
    return (
      <form onSubmit={ this.onSubmitForm }>
        <Container component="main" maxWidth="xs">
          <div className="text-center">
            <Typography className="mt-3" variant="h6">Login Trybe Wallet</Typography>
          </div>
          <TextField
            data-testid="email-input"
            variant="outlined"
            fullWidth
            required
            id="email"
            label="Email"
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
          <TextField
            data-testid="password-input"
            variant="outlined"
            margin="normal"
            required
            fullWidth
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
// const mapDispatchToProps = () => ({});

// export default connect(null, mapDispatchToProps)(Login);
export default Login;
