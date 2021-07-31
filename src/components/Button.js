import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);

    this.handleRedirect = this.handleRedirect.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      redirect: false,
    };
  }

  handleRedirect() {
    this.setState({ redirect: true });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick();
    this.handleRedirect();
  }

  render() {
    const { className, buttonText, pathname, isDisable } = this.props;
    const { redirect } = this.state;
    return (
      ((redirect) ? (
        <Redirect to={ pathname } />
      ) : (
        <button
          className={ className }
          type="button"
          onClick={ this.handleClick }
          disabled={ isDisable }
        >
          { buttonText }
        </button>
      ))
    );
  }
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isDisable: PropTypes.bool.isRequired,
};

export default Button;
