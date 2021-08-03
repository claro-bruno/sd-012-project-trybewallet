import React from 'react';
import PropTypes from 'prop-types';

class GenericButton extends React.Component {
  render() {
    const { value, disabled } = this.props;

    return (
      <button type="button" disabled={ disabled }>{ value }</button>
    );
  }
}

GenericButton.propTypes = {
  value: PropTypes.string,
}.isRequired;

export default GenericButton;
