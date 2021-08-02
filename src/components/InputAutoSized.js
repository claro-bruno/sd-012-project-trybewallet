import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputAutoSized extends Component {
  render() {
    const { label, id, type, value, handleChange } = this.props;

    return (
      <div className="col-auto">
        <label htmlFor={ id } className="form-label">
          {label}
          <input
            id={ id }
            name={ id }
            className="form-control"
            type={ type }
            required
            value={ value }
            onChange={ (event) => handleChange(event) }
          />
        </label>

      </div>
    );
  }
}

InputAutoSized.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputAutoSized;
