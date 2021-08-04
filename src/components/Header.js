import React, { Component } from 'react';
import { connect } from 'react-redux';
import { number, string, arrayOf, objectOf, oneOfType, object } from 'prop-types';
import logo from '../assets/logo.png';

class Header extends Component {
  constructor() {
    super();

    this.totalSum = this.totalSum.bind(this);
  }

  totalSum(total) {
    let currentValue = 0;
    total.forEach((crr) => {
      currentValue += (parseFloat(crr.value)
      * parseFloat(crr.exchangeRates[crr.currency].ask));
    });
    return parseFloat(currentValue).toFixed(2);
  }

  render() {
    const { email, total } = this.props;
    const totalPrice = this.totalSum(total);

    return (
      <div className="header">
        <img
          className="header__img"
          src={ logo }
          alt="logo trybe"
        />
        <div className="user__info">
          <p className="info__email" data-testid="email-field">{`Email: ${email}`}</p>
          <p
            className="info__expense"
            data-testid="total-field"
          >
            {`Despesa Total: R$ ${totalPrice}`}
          </p>
          <div
            className="currency__selector"
            data-testid="header-currency-field"
          >
            <p>Moeda:</p>
            <p data-testid="header__currency__field">
              BRL
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.expenses,
});

/* const mapDispatchToProps = {

} */

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: string.isRequired,
  total: arrayOf(objectOf(oneOfType([string, number, object]))).isRequired,
};
