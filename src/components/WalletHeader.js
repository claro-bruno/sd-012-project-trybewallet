import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class walletHeader extends React.Component {
  render() {
    const total = 0;
    const { email } = this.props;
    return (
      <header data-testid="email-field">
        <div>
          Email:
          { email }
        </div>
        <div data-testid="total-field">
          despesa total: R$
          { total }
        </div>
        <div data-testid="header-currency-field">BRL</div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

walletHeader.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(walletHeader);
