import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../pages/pages.css';

class InputLogin extends Component {
  render() {
    const { obj, handleChange } = this.props;
    return (
      <div className="inputs">
        <input
          name={ obj.name }
          value={ obj.type }
          data-testid={ obj.dataTestId }
          type={ obj.typeText }
          placeholder={ obj.placeholder }
          onChange={ handleChange }
        />
      </div>
    );
  }
}

InputLogin.propTypes = {
  obj: PropTypes.objectOf(PropTypes.string, PropTypes.func).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputLogin;
