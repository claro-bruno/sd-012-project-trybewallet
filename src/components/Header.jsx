import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { saveExpenses } from '../actions';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleTotal = this.handleTotal.bind(this);
  }

  handleTotal() {
    const { getValue } = this.props;
    return getValue.reduce((acomulator, { value, exchangeRates, currency }) => (
      acomulator + exchangeRates[currency].ask * value
    ), 0);
  }

  render() {
    const { getEmail } = this.props;
    const currency = 'BRL';

    return (
      <div className="trybeHeader">
        <img src="https://www.abcdacomunicacao.com.br/wp-content/uploads/Trybe_logo-baixa.png" alt="logo-trybe" />
        <p data-testid="email-field">{ `Email: ${getEmail}` }</p>
        <p data-testid="total-field">{ `Despesa Total: R$ ${this.handleTotal()}` }</p>
        <p data-testid="header-currency-field">{ currency }</p>
      </div>
    );
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  getEmail: user.email,
  getValue: wallet.expenses,

});

Header.propTypes = {
  getEmail: PropTypes.string.isRequired,
  getValue: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
