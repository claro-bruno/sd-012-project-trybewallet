import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { getEmailS } = this.props;
    return (
      <div>
        <header>
          <h5 data-testid="email-field">
            {getEmailS}
          </h5>
          <h5 data-testid="total-field">
            Valor: 0
          </h5>
          <h5 data-testid="header-currency-field">
            Câmbio utilizado: BRL
          </h5>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getEmailS: state.user.email,
});

Header.propTypes = {
  getEmailS: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
