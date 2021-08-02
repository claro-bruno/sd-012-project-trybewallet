import React, { Component } from 'react';

class AddExpense extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  render() {
    const { value } = this.state;

    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor
            <input
              name="value"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>
        </form>
      </div>
    );
  }
}

export default AddExpense;
