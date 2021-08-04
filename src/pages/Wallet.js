import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Components/Header';
import FormWallet from '../Components/FormWallet';
import { fetchCyrrency } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: 0,
      description: '',
      currency: '',
      payment: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { setCurrencyStore } = this.props;
    setCurrencyStore();
  }

  handleChange({ target: { name, value } }) {
    this.setState((state) => ({
      ...state,
      [name]: value,
    }));
  }

  render() {
    const { value, description, payment, currency, tag } = this.state;
    const { currencyStore } = this.props;
    return (
      <main>
        <Header />
        <FormWallet
          value={ value }
          description={ description }
          currency={ currency }
          currencyStore={ currencyStore }
          payment={ payment }
          tag={ tag }
          handleChange={ this.handleChange }
        />
      </main>
    );
  }
}

Wallet.propTypes = {
  setCurrencyStore: PropTypes.func.isRequired,
  currencyStore: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currencyStore: state.wallet.currencies,
});

const mapDispatchToPtops = (dispatch) => ({
  setCurrencyStore: () => dispatch(fetchCyrrency()),
});

export default connect(mapStateToProps, mapDispatchToPtops)(Wallet);
