import React from 'react';
import { connect } from 'react-redux';

class HeaderWallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">despesa total: 0</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
})

export default connect(mapStateToProps, null)(HeaderWallet);