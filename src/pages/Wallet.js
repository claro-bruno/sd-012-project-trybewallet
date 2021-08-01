import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import ExpenseForm from '../components/ExpenseForm';
import { fetchCurrencies } from '../actions';
import ExpenseTable from '../components/ExpenseTable';
import ExpenseFormEdit from '../components/ExpenseFormEdit';
import './Wallet.css';

class Wallet extends React.Component {
  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  render() {
    const { loading, edit } = this.props;
    return (
      <div>
        <Header />
        { loading && <p>Carregando...</p> }
        { !edit ? <ExpenseForm /> : <ExpenseFormEdit /> }
        <ExpenseTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.wallet.loading,
  edit: state.wallet.edit,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrencies: () => dispatch(fetchCurrencies()),
});

Wallet.propTypes = {
  setCurrencies: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  edit: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
