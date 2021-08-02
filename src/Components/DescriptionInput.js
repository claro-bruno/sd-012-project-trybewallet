import React from 'react';
import PropTypes from 'prop-types';

class descriptionInput extends React.Component {
  render() {
    const { func, value } = this.props;
    return (
      <label htmlFor="description">
        Valor:
        <input
          onChange={ func }
          value={ value }
          id="description"
          type="text"
          name="description"
          data-testid="description-input"
        />
      </label>
    );
  }
}

descriptionInput.propTypes = {
  func: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default descriptionInput;
