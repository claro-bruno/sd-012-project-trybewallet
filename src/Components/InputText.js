import React from 'react';
import PropTypes from 'prop-types';

class ImputText extends React.Component {
  render() {
    const { id, label, value, name, onChange } = this.props;

    return (
      <label htmlFor={ id }>
        { label }
        <input
          type="text"
          id={ id }
          value={ value }
          name={ name }
          onChange={ onChange }
        />
      </label>
    );
  }
}

ImputText.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ImputText;
