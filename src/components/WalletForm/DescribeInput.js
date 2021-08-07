import React from 'react';
import PropTypes from 'prop-types';

class DescribeInput extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <div>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            id="description"
            name="description"
            value={ value }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

DescribeInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default DescribeInput;
