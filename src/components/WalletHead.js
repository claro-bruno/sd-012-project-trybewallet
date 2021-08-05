import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletHead extends React.Component {

  render() {
    const { email } = this.props;
    return (
      <header>
        <div>
          <h3 data-testid="email-field">{ email }</h3>
        </div>
        <div>
          <span data-testid="total-field">
            0
          </span>
        </div>
        <div>
          <span data-testid="header-currency-field">
            BRL
          </span>
        </div>
      </header>
    );
  }
}

WalletHead.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => (
  { email: state.user.email }
);

export default connect(mapStateToProps)(WalletHead);
