import React from 'react';
import { func, string } from 'prop-types';

class InputDescriptioin extends React.Component {
  render() {
    const { handleChange, description } = this.props;
    return (
      <label htmlFor="descricao">
        Descrição
        <input
          id="descricao"
          type="text"
          name="description"
          data-testid="description-input"
          value={ description }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputDescriptioin.propTypes = ({
  handleChange: func.isRequired,
  description: string.isRequired,
});

export default InputDescriptioin;
