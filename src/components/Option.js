import React from 'react';
import PropTypes from 'prop-types';

class Option extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <option value={ text }>
        { text }
      </option>
    );
  }
}

Option.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Option;
