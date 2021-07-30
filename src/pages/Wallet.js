import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import ExpenseForm from '../components/ExpenseForm';
import { fetchCurrencies } from '../actions';


class Wallet extends React.Component {
  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  render() {
    const { loading } = this.props;
    return (
      <div>
        <Header />
        { loading ? <p>Carregando...</p> : <ExpenseForm /> }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.wallet.loading,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrencies: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
