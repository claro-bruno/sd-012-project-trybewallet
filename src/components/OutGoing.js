import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OutGoing extends Component {
  constructor(props) {
    super(props)
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  handleOnSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleOnSubmit(e)}>
        <label htmlFor="valor">
          Valor:
          <input
            id="valor"
            type="text"
            name="valor"
            onChange={({ target }) => this.handleOnChange(target.name, target.value)}
          />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            id="descricao"
            type="text"
            name="descricao"
            onChange={({ target }) => this.handleOnChange(target.name, target.value)}
          />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select
            aria-label="moeda"
            type="text"
            name="moeda"
          />
        </label>
        <label htmlFor="pagamento">
          método de pagamento:
          <select
            aria-label="pagamento"
            type="text"
            name="pagamento"
          >
          </select>
        </label>
        <label htmlFor="tag">
          tag:
          <select
            aria-label="tag"
            type="text"
            name="tag"
          />
        </label>
        <button type="submit" >adicionar despesa</button>
      </form>
    );
  }
}

export default OutGoing;
