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
    const { isDisable, onClick } = this.props;
    if (!isDisable) {
      onClick();
      this.handleRedirect();
    }
  }

  render() {
    const { className, type, buttonText, pathname, isDisable } = this.props;
    const { redirect } = this.state;
    return (
      ((redirect && (pathname.length > 0) && !isDisable) ? (
        <Redirect to={ pathname } />
      ) : (
        <button
          className={ className }
          type={ (type === 'submit' ? 'submit' : 'button') }
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
  type: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isDisable: PropTypes.bool.isRequired,
};

Button.defaultProps = {
  type: undefined,
};

export default Button;
