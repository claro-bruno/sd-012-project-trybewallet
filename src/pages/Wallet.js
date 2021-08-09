import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormDespesas from '../components/FormDespesas';

class Wallet extends React.Component {
  render() {
    const { user, expenses } = this.props;
    let total = 0;
    if (expenses.length > 0) {
      total = expenses
        .reduce((acc, { valor, response, moeda }) => (
          acc + (Number(valor) * Number(response[moeda].ask))), 0);
    }
    return (
      <div>
        <header>
          <p data-testid="email-field">{ user.email }</p>
          <p data-testid="total-field">{total}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <FormDespesas />
      </div>
    );
  }
}

Wallet.propTypes = {
  user: PropTypes.objectOf(Object).isRequired,
  expenses: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);
