import React, { Component } from 'react';

class Moeda extends Component {
  render() {
    return (
      <div>
        <label htmlFor="Moeda">
          Moeda:
          <select id="moeda">
            {/* api options */}
          </select>
        </label>
      </div>
    );
  }
}

export default Moeda;
