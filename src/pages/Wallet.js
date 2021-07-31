import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
    const { userEmail } = this.props;
    const { totalExpenses, current } = this.state;
    return (
      <header>
        <span>
          <h3 data-testid="email-field">
            { userEmail }
          </h3>
        </span>
        <span>
          <h3 data-testid="total-field">
            { totalExpenses }
          </h3>
        </span>
        <span>
          <h3 data-testid="header-currency-field">
            { current }
          </h3>
        </span>
      </header>
    );
  }
}

Wallet.propTypes = ({
  userEmail: PropTypes.string,
}).isRequired;

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
