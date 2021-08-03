import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { myEmail } = this.props;
    return (
      <header>
        <p data-testid="email-field">
          {`E-mail: ${myEmail}` }
        </p>
        <p data-testid="total-field">
          Despesas totais: 0
        </p>
        <p data-testid="header-currency-field">
        BRL:
        </p>
      </header>
    );
  }
}

Wallet.propTypes = {
  myEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  myEmail: state.user.email });

export default connect(mapStateToProps, null)(Wallet);
