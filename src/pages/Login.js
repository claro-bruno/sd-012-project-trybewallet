import React from 'react';
import Email from '../component/Email';
import Password from '../component/Password';
import Button from '../component/Button';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      user: {
        email: '',
        password: '',
      },
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const { value } = target;
    this.setState(({ user }) => ({
      user: { ...user, [name]: value },
    }));
  }

  render() {
    const { user: { email, password } } = this.state;
    return (
      <div className="login-container">
        <div className="login">
          <Email
            handleChange={ this.handleChange }
            value={ email }
          />
          <Password handleChange={ this.handleChange } value={ password } />
          <Button state={ this.state } />
        </div>
      </div>
    );
  }
}

export default Login;
