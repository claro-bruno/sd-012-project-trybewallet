import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';

class AddExpenses extends React.Component {
  render() {
    const { loading } = this.props;
    if (loading) { return <p> CARREGANDO... </p>; }
    return (
      <ExpenseForm />
    );
  }
}

AddExpenses.propTypes = {
  loading: PropTypes.bool,
};

AddExpenses.defaultProps = {
  loading: true,
};

const mapStateToProps = (state) => ({
  loading: state.wallet.isFetching,
});

export default connect(mapStateToProps)(AddExpenses);
