import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import headerTable from '../helpers/headerTable';

class ExpenseTable extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <table className="expense-table">
        <tr>
          {
            headerTable
              .map((item) => <th key={ item }>{item}</th>)
          }
        </tr>
        <tr>
          { expenses }
        </tr>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(ExpenseTable);
