import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteDataForm } from '../../actions';
import ButtonDelete from '../WalletControlled/ButtonDelete';

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
    const { props: { expenses, setId } } = this;
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

      return (
        <tr key={ id }>
          <td>{ description }</td>
          <td>{ tag }</td>
          <td>{ method }</td>
          <td>{ roundedValue }</td>
          <td>{ name }</td>
          <td>{ roundedAsk }</td>
          <td>{ roundedConversion }</td>
          <td>Real</td>
          <td>
            <ButtonDelete handleClick={ () => setId(id) } />
          </td>
        </tr>
      );
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
          { lineContentArray() }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  emailStore: state.user.email,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  setId: (state) => dispatch(deleteDataForm(state)),
});

const { string, number, object, arrayOf, objectOf, oneOfType, func } = PropTypes;
Table.propTypes = {
  setId: func.isRequired,
  expenses: arrayOf(
    objectOf(oneOfType([
      string,
      number,
      object,
    ])),
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
