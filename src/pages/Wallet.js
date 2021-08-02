import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { newExpense, newCurrencies } from '../actions';
import Formulario from '../component/Formulario';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      despesas: 0,
    };
  }

  render() {
    const { email } = this.props;
    const { despesas } = this.state;
    return (
      <div>
        <header>
          <h1>Saturno Wallet</h1>
          <h3 data-testid="email-field">
            Email:
            {email}
          </h3>
          <h3 data-testid="total-field">
            Despesa Total: R$
            {despesas}
          </h3>
          <h3 data-testid="header-currency-field">BRL</h3>
        </header>
        <Formulario />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  newExpense: (value) => dispatch(newExpense(value)),
  newCurrencies: (value) => dispatch(newCurrencies(value)),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
