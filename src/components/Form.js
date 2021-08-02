import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="descricao">
            Descrição
            <input type="text" name="descricao" />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
