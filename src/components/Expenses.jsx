import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import ExpenseTable from './ExpenseTable';
import { fetchCurrencies } from '../actions';

class Expenses extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { loading } = this.props;
    if (loading) { return <p> CARREGANDO... </p>; }
    return (
      <>
        <ExpenseForm />
        <ExpenseTable />
      </>
    );
  }
}

Expenses.propTypes = {
  loading: PropTypes.bool,
  getCurrencies: PropTypes.func.isRequired,
};

Expenses.defaultProps = {
  loading: true,
};

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

const mapStateToProps = (state) => ({
  loading: state.wallet.isFetching,
});

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
