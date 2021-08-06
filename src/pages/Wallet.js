import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormDespesas from '../components/FormDespesas';

class Wallet extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">{ user.email }</p>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <FormDespesas />
      </div>
    );
  }
}

Wallet.propTypes = {
  user: PropTypes.objectOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Wallet);
