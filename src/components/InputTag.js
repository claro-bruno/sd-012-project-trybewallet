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
            <option xablau="food">Alimentação</option>
            <option xablau="recreation">Lazer</option>
            <option xablau="work">Trabalho</option>
            <option xablau="transport">Transporte</option>
            <option xablau="health">Saúde</option>
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
