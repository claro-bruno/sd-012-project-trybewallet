import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Description extends Component {
  render() {
    const { description, hadlechange } = this.props;
    return (
      <div>
        <label htmlFor="description">
          Descrição:
          <input
            id="description"
            type="text"
            name="description"
            value={ description }
            onChange={ hadlechange }
          />
        </label>
      </div>
    );
  }
}

Description.propTypes = {
  description: PropTypes.string.isRequired,
  hadlechange: PropTypes.func.isRequired,
};

export default Description;
