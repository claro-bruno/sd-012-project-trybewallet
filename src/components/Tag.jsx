import React, { Component } from 'react';

class Tag extends Component {
  constructor() {
    super();
    this.state = {
      tag: 'food',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      tag: target.value,
    });
  }

  render() {
    const { tag } = this.state;
    return (
      <label htmlFor="paymentTag">
        Tag
        <select id="paymentTag" onChange={ this.handleChange } value={ tag }>
          <option value="food">Alimentação</option>
          <option value="recreation">Lazer</option>
          <option value="work">Trabalho</option>
          <option value="mobility">Transporte</option>
          <option value="health">Saúde</option>
        </select>
      </label>
    );
  }
}

export default Tag;
