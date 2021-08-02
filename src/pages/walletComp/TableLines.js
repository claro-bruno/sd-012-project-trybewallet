import React from 'react';
import PropTypes from 'prop-types';

export default class TableLines extends React.Component {
  constructor(props) {
    super(props);
    this.currencyName = this.currencyName.bind(this);
  }

  currencyName(id) {
    const { nome, expenses, chave } = this.props;
    if (nome === 'Moeda') {
      return expenses[id].exchangeRates[expenses[id].currency].name.split('/')[0];
    }
    return expenses[id][chave];
  }

  render() {
    const { expenses, nome } = this.props;
    return (
      <div>
        { nome }
        { expenses.map(({ id }) => (
          <div key={ id } className="table-lines">{ this.currencyName(id) }</div>))}
      </div>
    );
  }
}

TableLines.propTypes = {
  expenses: PropTypes.arrayOf(Array).isRequired,
  chave: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
};
