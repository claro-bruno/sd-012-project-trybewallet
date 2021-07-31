import React, { Component } from 'react';

class Tag extends Component {
  render() {
    const taG = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      taG.map((tag, index) => (
        <option key={ index } value={ tag }>
          {tag}
        </option>
      ))
    );
  }
}

export default Tag;
