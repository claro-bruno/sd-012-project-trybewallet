import React from 'react';
import PropTypes from 'prop-types';

export default class InputDescription extends React.Component {
  render() {
    const { onChangeHandler } = this.props;
    return (
      <>
        <label htmlFor="descricao">
          Descrição:
          <input
            onChange={ onChangeHandler }
            type="text"
            name="descricao"
            id="descricao"
          />
        </label>
        <br />
      </>
    );
  }
}

InputDescription.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
};
