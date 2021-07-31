import React from 'react';
import PropTypes from 'prop-types';

class StaticInputs extends React.Component {
  render() {
    const { onChange, values } = this.props;
    return (
      <div>
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            id="value"
            name="value"
            onChange={ onChange }
            value={ values[0] }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            name="description"
            onChange={ onChange }
            value={ values[1] }
          />
        </label>
      </div>
    );
  }
}

StaticInputs.propTypes = {
  onChange: PropTypes.func.isRequired,
  values: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

export default StaticInputs;
