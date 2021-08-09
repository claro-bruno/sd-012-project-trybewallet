import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrencyAPI } from '../actions/index';

class Currencies extends Component {
  componentDidMount() {
    const { currencyFetchToRedux } = this.props;
    currencyFetchToRedux();
  }

  render() {
    const { currencyStateFromRedux, value, name, onChange } = this.props;

    return (
      <label htmlFor="moeda">
        Moeda
        <select
          id="moeda"
          value={ value }
          name={ name }
          onChange={ onChange }
        >
          { currencyStateFromRedux.map((item) => (
            <option key={ item }>{ item }</option>)) }
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  currencyStateFromRedux: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  currencyFetchToRedux: () => dispatch(getCurrencyAPI()),
});

Currencies.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  currencyStateFromRedux: PropTypes.arrayOf(PropTypes.string).isRequired,
  currencyFetchToRedux: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Currencies);
