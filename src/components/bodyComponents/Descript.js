import React from 'react';
import PropTypes from 'prop-types';

class Descript extends React.Component {
  render() {
    const { onChange, description } = this.props;
    return (
      <label htmlFor="description">
        Descrição:
        <input
          type="text"
          id="description"
          name="description"
          value={ description }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Descript.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
}.isRequired;

export default Descript;
