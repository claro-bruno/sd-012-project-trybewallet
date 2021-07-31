import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const {
      props: { emailStore },
    } = this;

    return (
      <ul>
        <li data-testid="email-field">{`Email: ${emailStore}`}</li>
        <li data-testid="total-field">{ `Despesa Total: ${0}` }</li>
        <li data-testid="header-currency-field">Cambio: BRL</li>
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  emailStore: state.user.email,
});

const { string } = PropTypes;
Header.propTypes = {
  emailStore: string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
