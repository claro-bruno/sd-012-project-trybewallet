import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <section>

        <header>
          <span data-testid="email-field">
            { email }
            <p data-testid="total-field">0</p>
            <p data-testid="header-currency-field">BRL</p>

          </span>
        </header>

      </section>
    );
  }
}
const mapStateToProps = (state) => ({ email: state.user.email });

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
};
