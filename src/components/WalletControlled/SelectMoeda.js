import React from 'react';
import PropTypes from 'prop-types';
import Select from '../standart/Select';

class SelectMoeda extends React.Component {
  render() {
    const {
      props: {
        value,
        handleChange,
      },
    } = this;

    const optionsArray = [
      { value: '', text: '' },
    ];

    return (
      <Select
        name="currency"
        labelText="Moeda:"
        value={ value }
        handleChange={ handleChange }
        options={ optionsArray }
      />
    );
  }
}

const { string, func } = PropTypes;
SelectMoeda.propTypes = {
  value: string.isRequired,
  handleChange: func.isRequired,
};

export default SelectMoeda;
