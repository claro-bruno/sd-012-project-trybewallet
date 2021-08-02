import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveLogin } from '../../actions/index';

class HeaderWallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <p data-testid="email-field">
          <strong>Email:</strong>
          { email }
        </p>
        <p data-testid="total-field">
          <strong>Despesas:</strong>
          0
        </p>
        <p data-testid="header-currency-field">
          <strong>Moeda:</strong>
          BRL
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  addEmail: (email) => dispatch(saveLogin(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderWallet);

HeaderWallet.propTypes = {
  email: PropTypes.string.isRequired,
};
