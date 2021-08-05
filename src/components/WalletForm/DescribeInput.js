import React from 'react';

class DescribeInput extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="describe">
          Descrição
          <input
            type="text"
            id="describe"
            name="describe"
          />
        </label>
      </div>
    );
  }
}

export default DescribeInput;
