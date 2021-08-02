import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/Form';

class Wallet extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">{ user.email }</span>
          <span data-testid="total-field">0</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <Form />
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    user: state.user,
  }
);
export default connect(mapStateToProps, null)(Wallet);

Wallet.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
};
