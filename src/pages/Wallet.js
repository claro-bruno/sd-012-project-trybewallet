import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import ExpensesForm from '../components/ExpensesForm';
import { fetchCurrency } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { myUserState } = this.props;
    return (
      <section>
        <Header myUserState={ myUserState.user } />
        <form>
          <ExpensesForm />
        </form>
      </section>
    );
  }
}

Wallet.propTypes = {
  myUserState: PropTypes.shape(PropTypes.string.isRequired).isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrency()),
});

const mapStateToProps = (state) => ({
  myUserState: state,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
