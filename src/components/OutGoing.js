import React, { Component } from 'react';
import { connect } from 'react-redux';

class OutGoing extends Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input id="valor" type="text" name="valor" readOnly />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input id="descricao" type="text" name="descricao" readOnly />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select aria-label="moeda" type="text" name="moeda" readOnly />
        </label>
        <label htmlFor="pagamento">
          Pagamento:
          <select aria-label="pagamento" type="text" name="pagamento" />
        </label>
        <label htmlFor="tag">
          tag:
          <select aria-label="tag" type="text" name="tag" />
        </label>
      </form>
    );
  }
}


export default connect(null, mapDispatchToProps)(OutGoing);
