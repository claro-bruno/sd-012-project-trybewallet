import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserEmail } from '../redux/actions';
// import './Login.css'

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      totalValue: 0,
      selectedCurrency: 'BRL',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, this.btnStats);
  }

  render() {
    const { handleChange } = this;
    const { totalValue, selectedCurrency } = this.state;
    const { userEmail } = this.props;
    return (
      <>
        <header>
          <p>BEM-VINDO</p>
          <p>
            {'Usuário: '}
            <span data-testid="email-field">{userEmail}</span>
          </p>
          <p>
            {'Sua despesa total é: '}
            <span data-testid="total-field">{totalValue}</span>
            {' '}
            <span data-testid="header-currency-field">{selectedCurrency}</span>
          </p>
        </header>
        <div>
          <p>teste</p>
        </div>
      </>
    );
  }
}

Wallet.propTypes = {
  getUser: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    userEmail: state.user.email,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getUser: (email) => dispatch(getUserEmail(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
