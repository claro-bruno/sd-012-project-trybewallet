import React from 'react';
import PropTypes from 'prop-types';

class InputCard extends React.Component {
  render() {
    const { labelText, id, name, type, value, onChange, testId } = this.props;
    return (
      <label htmlFor={ id }>
        { labelText }
        <input
          id={ id }
          name={ name }
          type={ type }
          value={ value }
          data-testid={ testId }
          onChange={ onChange }
        />
      </label>
    );
  }
}
InputCard.defaultProps = {
  labelText: '',
  testId: '',
};
InputCard.propTypes = {
  labelText: PropTypes.string,
  testId: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputCard;
