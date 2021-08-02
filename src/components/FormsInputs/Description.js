import React, { Component } from 'react';

class Description extends Component {
  render() {
    return (
      <div>
        <label htmlFor="description">
          Descrição:
          <input id="description" type="text" />
        </label>
      </div>
    );
  }
}

export default Description;
