import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import { ACTION } from '../redux/actions/ACTION';

// import {  } from 'react-router-dom';
// import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isBtnDisabled: true,
      isLogged: false,
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onChangeHandler({ target }) {
    const { name, value } = target;
    const { email, password } = this.state;
    const regex = /^[a-z0-9_]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
    const passLen = 6;
    this.setState({ [name]: value });
    if (password.length >= passLen && email.match(regex)) {
      this.setState({
        isBtnDisabled: false,
      });
    } else {
      this.setState({
        isBtnDisabled: true,
      });
    }
  }

  onClickHandler(e) {
    const { email, password } = this.state;
    const regex = /^[a-z0-9_]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
    const passLen = 6;
    e.preventDefault();
    if (password.length >= passLen && email.match(regex)) {
      this.setState({
        isLogged: true,
      });
      alert('isso');
    }
    // const { dispatchAction } = this.props;
    // dispatchAction(this.state);
  }

  // componentDidMount() {}
  // componentWillUnmount() {}
  // shouldComponentUpdate() {}

  render() {
    // const {  } = this.props;
    const { email, password, isLogged, isBtnDisabled } = this.state;
    if (isLogged) { return <Redirect to="/wallet" />; }
    console.log(isBtnDisabled);
    return (
      <form action="#">
        <p>Login</p>
        <label htmlFor="email">
          <input
            name="email"
            type="email"
            placeholder="Email"
            data-testid="email-input"
            value={ email }
            onChange={ this.onChangeHandler }
          />
        </label>
        <label htmlFor="password">
          <input
            name="password"
            type="password"
            placeholder="Senha"
            data-testid="password-input"
            value={ password }
            onChange={ this.onChangeHandler }
          />
        </label>
        <button
          type="submit"
          onClick={ this.onClickHandler }
          disabled={ isBtnDisabled }
        >
          Entrar
        </button>
        <p>d{ isBtnDisabled }</p>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    // dispatchAction: (payload) => dispatch(ACTION(payload)),
    // dispatchAsyncAction: (payload) => dispatch(ASYNCACTION(payload)),
  }
);
const mapStateToProps = (state) => (
  {
    STOREINFO: state.reducer,
  }
);
export default connect(mapStateToProps, mapDispatchToProps)(Login);

// Login.propTypes = {
//   var: PropTypes.type.isRequired,
//   arr: PropTypes.arrayOf(PropTypes.number).isRequired,

//   obj: PropTypes.shape({
//     var: PropTypes.type.isRequired,
//     }).isRequired,

//   optionalUnion: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number,
//   ]).isRequired,
// };
