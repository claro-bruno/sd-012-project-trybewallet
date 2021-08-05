import React from 'react';
import PropTypes from 'prop-types';

class ValueInput extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <div>
        <label htmlFor="value">
          Valor
          <input
            type="text"
            id="value"
            name="value"
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

ValueInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ValueInput;
