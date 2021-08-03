import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const HEADERS_TABLE = [
  'Descrição',
  'Tag',
  'Método de pagamento',
  'Valor',
  'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir',
];

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.lineContentArray = this.lineContentArray.bind(this);
  }

  lineContentArray() {
    const { props: { expenses } } = this;
    const lineMap = expenses.map((expense) => {
      const {
        id,
        currency,
        description,
        tag,
        method,
        value,
        exchangeRates,
      } = expense;

      const { ask, name } = exchangeRates[currency];
      const roundedValue = (
        Math.round((+value + Number.EPSILON) * 100) / 100
      );

      const conversion = +value * ask;
      const roundedConversion = (
        Math.round((conversion + Number.EPSILON) * 100) / 100
      );

      const roundedAsk = (
        Math.round((+ask + Number.EPSILON) * 100) / 100
      );

      return ([
        description,
        tag,
        method,
        roundedValue,
        name,
        roundedAsk,
        roundedConversion,
        'Real',
        <section key={ id }>
          <button type="button">Editar</button>
          <button type="button">Deletar</button>
        </section>,
      ]);
    });
    return lineMap;
  }

  render() {
    const { lineContentArray } = this;
    return (
      <table>
        <thead>
          <tr>
            { HEADERS_TABLE.map((header) => <th key={ header }>{ header }</th>) }
          </tr>
        </thead>
        <tbody>
          { lineContentArray()
            .map((lines) => (
              <tr key={ lines }>
                { lines.map((line) => <td key={ line }>{ line }</td>) }
              </tr>
            )) }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  emailStore: state.user.email,
  expenses: state.wallet.expenses,
});

const { string, number, object, arrayOf, objectOf, oneOfType } = PropTypes;
Table.propTypes = {
  expenses: arrayOf(
    objectOf(oneOfType([
      string,
      number,
      object,
    ])),
  ).isRequired,
};

export default connect(mapStateToProps, null)(Table);
