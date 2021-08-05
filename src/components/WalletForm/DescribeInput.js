import React from 'react';
import PropTypes from 'prop-types';

class DescribeInput extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <div>
        <label htmlFor="describe">
          Descrição
          <input
            type="text"
            id="describe"
            name="describe"
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
