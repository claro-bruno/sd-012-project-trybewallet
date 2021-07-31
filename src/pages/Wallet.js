import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Select from '../components/Select';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalExpenses: 0,
      current: 'BRL',
      // currencies: [],
      // expenses: [],
    };
  }

  render() {
    const { userEmail } = this.props; // vem do Provider ou connect
    const { totalExpenses, current } = this.state;
    return (
      <section>
        <header>
          <span>
            <p data-testid="email-field">{userEmail}</p>
            <p data-testid="total-field">{totalExpenses}</p>
            <p data-testid="header-currency-field">{current}</p>
          </span>
        </header>
        <section>
          <form>
            <label htmlFor="value-expenses">
              Valor
              <input id="value-expenses" />
            </label>
            <label htmlFor="description">
              Descrição
              <input id="description" />
            </label>
            <Select />
          </form>
        </section>
      </section>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
