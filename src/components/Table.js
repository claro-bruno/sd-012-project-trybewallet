import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const helperObject = {
  currencyRate: (elm, param) => Object.values(elm.exchangeRates)
    .find((e) => e.code === elm.currency)[param],
  totalValue: (elm) => elm.value * helperObject.currencyRate(elm, 'ask'),
  currencyUtilized: (elm) => helperObject.currencyRate(elm, 'name'),
  tags: ['Descrição', 'Tag', 'Método de pagamento',
    'Valor', 'Moeda', 'Câmbio utilizado',
    'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'],
};
const TableComponent = ({ expenses }) => (
  <section>
    <h1>Recent Payments</h1>
    <Table size="small">
      <TableHead>
        <TableRow>
          {helperObject.tags.map((e) => <TableCell key={ e }>{e}</TableCell>)}
        </TableRow>
      </TableHead>
      <TableBody>
        {expenses.map((e) => (
          <TableRow key={ e.description }>
            <TableCell>{e.description}</TableCell>
            <TableCell>{e.tag}</TableCell>
            <TableCell>{e.method}</TableCell>
            <TableCell>{e.value}</TableCell>
            <TableCell>{helperObject.currencyRate(e, 'name').split('/')[0]}</TableCell>
            <TableCell>
              {Number(helperObject.currencyRate(e, 'ask')).toFixed(2)}
            </TableCell>
            <TableCell>
              {helperObject.totalValue(e).toFixed(2)}
            </TableCell>
            <TableCell>Real</TableCell>
            <TableCell>
              <Button
                style={ { backgroundColor: 'darkred', color: 'white' } }
                type="button"
              >
                Excluir
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </section>
);

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

TableComponent.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
};

TableComponent.defaultProps = {
  expenses: [],
};

export default connect(mapStateToProps, null)(TableComponent);
