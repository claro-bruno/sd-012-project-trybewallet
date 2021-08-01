import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { getEmail } = this.props;
    const total = 0;
    const currency = 'BRL';

    return (
      <div>
        TrybeHeader
        <p data-testid="email-field">{ `Email: ${getEmail}` }</p>
        <p data-testid="total-field">{ `Despesa Total: R$ ${total}` }</p>
        <p data-testid="header-currency-field">{ currency }</p>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
});

Header.propTypes = {
  getEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
