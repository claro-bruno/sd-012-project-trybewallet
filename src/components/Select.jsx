import React, { Component } from 'react';

export default class Select extends Component {
  render() {
    return (
      <div>
        <label htmlFor={ selectProps.name }>
          {selectLabel}
          <select
            { ...selectProps }
            onChange={ onChange }
          >
            { selectOptions ? selectOptions
              .map((option) => <option key={ selectOptions.id }>{option}</option>)
              : null}
          </select>
        </label>
      </div>
    );
  }
}
