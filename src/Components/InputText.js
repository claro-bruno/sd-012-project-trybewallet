import React from 'react';
import PropTypes from 'prop-types';

class ImputText extends React.Component {
  render() {
    const { id, label } = this.props;

    return (
      <label htmlFor={ id }>
        { label }
        <input
          type="text"
          id={ id }
        />
      </label>
    );
  }
}

ImputText.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default ImputText;
