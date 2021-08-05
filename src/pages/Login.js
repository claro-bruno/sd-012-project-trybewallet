import React from 'react';
// import { Link } from 'react-router-dom';

// const INITIAL_STATE = {
//   email: '',
//   password: '',
// };

class Login extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = INITIAL_STATE;

  //   this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange({ target }) {
  //   const { name, value } = target;
  //   this.setState({
  //     [name]: value,
  //   });
  // }

  render() {
    // const { email, password } = this.state;
    return (
      <div>
        <form>
          <input
            type="email"
            id="email"
            name="email"
            // value={ email }
            data-testid="email-input"
            // onChange={ this.handleChange }
          />
          <input
            type="password"
            id="password"
            name="password"
            // value={ password }
            data-testid="password-input"
            // onChange={ this.handleChange }
          />
          {/* <Link to="/"> */}
          <button type="submit">Entrar</button>
          {/* </Link> */}
        </form>
      </div>
    );
  }
}

export default Login;
