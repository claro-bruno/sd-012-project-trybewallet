import React from 'react';
import PropTypes from 'prop-types';

export default class InputAmount extends React.Component {
  render() {
    const { onChangeHandler } = this.props;
    return (
      <>
        <label htmlFor="amount">
          Valor:
          <input
            onChange={ onChangeHandler }
            type="number"
            name="amount"
            id="amount"
          />
        </label>
        <br />
      </>
    );
  }
}

InputAmount.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
};
