import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Select from '../components/Select';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <>
        <header>
          <p data-testid="email-field">{email}</p>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <form>
          <label htmlFor="valor">
            Valor
            <input id="valor" type="number" />
          </label>
          <label htmlFor="description">
            Descrição
            <input id="description" type="text" />
          </label>
          <Select />
        </form>
      </>
    );
  }
}

const mapState = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = { email: PropTypes.string.isRequired };

export default connect(mapState, null)(Wallet);
