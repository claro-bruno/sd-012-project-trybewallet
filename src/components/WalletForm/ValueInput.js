import React from 'react';
import PropTypes from 'prop-types';

class ValueInput extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <div>
        <label htmlFor="value">
          Valor
          <input
            type="text"
            id="value"
            name="value"
            value={ value }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

ValueInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default ValueInput;
