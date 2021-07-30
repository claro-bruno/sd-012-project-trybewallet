import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { ACTION } from '../redux/actions/ACTION';

// import {  } from 'react-router-dom';
// import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onChangeHandler({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  onClickHandler() {
    // const { dispatchAction } = this.props;
    // dispatchAction(this.state);
  }

  // componentDidMount() {}
  // componentWillUnmount() {}
  // shouldComponentUpdate() {}

  render() {
    // const {  } = this.props;
    // const {  } = this.state;

    return (
      <form>
        <p>Login</p>
        <label htmlFor="email">
          <input name="email" type="email" />
        </label>
        <label htmlFor="password">
          <input name="password" type="password" />
        </label>
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
