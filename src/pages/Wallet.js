import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      currency: 'BRL',
    };
  }

  render() {
    const { total, currency } = this.state;
    const { userEmail } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">{`Email: ${userEmail}`}</span>
          <span data-testid="total-field">{`Despesa Total: R$ ${total}`}</span>
          <span data-testid="header-currency-field">{`Moeda: ${currency}`}</span>
        </header>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
