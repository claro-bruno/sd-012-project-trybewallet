import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      despesas: 0,
    };
  }

  render() {
    const { email, total } = this.props;
    const { despesas } = this.state;
    if (total === undefined) {
      return (
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
      );
    }
    return (
      <header>
        <h1>Saturno Wallet</h1>
        <h3 data-testid="email-field">
          Email:
          {email}
        </h3>
        <h3 data-testid="total-field">
          Despesa Total: R$
          {total}
        </h3>
        <h3 data-testid="header-currency-field">BRL</h3>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  total: state.wallet.total,
});

Header.defaultProps = {
  total: undefined,
};

Header.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number,
};

export default connect(mapStateToProps)(Header);
