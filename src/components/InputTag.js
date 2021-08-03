import React from 'react';
import PropTypes from 'prop-types';

export default class InputTag extends React.Component {
  render() {
    const { onChangeHandler } = this.props;
    return (
      <>
        <label htmlFor="tag">
          Tag:
          <select
            onChange={ onChangeHandler }
            name="tag"
            id="tag"
          >
            <option value="food">Alimentação</option>
            <option value="recreation">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
        <br />
      </>
    );
  }
}

InputTag.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
};
