import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { name, text, type } = this.props;
    return (
      <label htmlFor={ name }>
        { text }
        <input type={ type } name={ name } id={ name } />
      </label>
    );
  }
}

Input.defaultProps = {
  text: '',
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
};

export default Input;
