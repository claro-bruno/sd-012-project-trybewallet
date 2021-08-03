import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Form from '../components/Form';
import { fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    fetchCurrencies();
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <Header currencies={ currencies } />
        <Form currencies={ currencies } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: dispatch(fetchCurrencies()),
});

Wallet.propTypes = ({
  currencies: PropTypes.array,
}).isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
