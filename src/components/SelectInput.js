import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectInput extends Component {
  inputLabel(name) {
    switch (name) {
    case 'currency':
      return 'Moeda:';
    case 'method':
      return 'Método de pagamento:';
    case 'tag':
      return 'Tag:';
    default:
      return 'Label';
    }
  }

  render() {
    const {
      hC,
      name,
      value,
      opt,
    } = this.props;
    const label = this.inputLabel(name);

    return (
      <div>
        <label htmlFor={ name }>{ label }</label>
        <select
          id={ name }
          data-testid={ `${name}-input` }
          name={ name }
          value={ value }
          onChange={ hC }
        >
          {opt.map((option) => (
            <option key={ option } value={ option }>{ option }</option>
          ))}
        </select>
      </div>
    );
  }
}

SelectInput.defaultProps = {
  opt: [],
};

SelectInput.propTypes = {
  hC: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  opt: PropTypes.arrayOf(PropTypes.string),
};

export default SelectInput;
