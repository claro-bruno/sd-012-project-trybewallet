import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getApiCurrency } from '../actions/index';

class SelectMoedas extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     currencyList: [],
  //   };

  componentDidMount() {
    const { setCurrency } = this.props;
    setCurrency();
  }

  render() {
    console.log(this.props);
    const { getCurrency } = this.props;
    return (
      <label htmlFor="moedas">
        Moeda
        <select
          name="moedas"
          id="moedas"
        >
          {
            getCurrency.map((currency) => (
              <option key={ currency }>{ currency }</option>
            ))
          }
        </select>
      </label>
    );
  }
}

// fazer um map com as moedas da action
const mapDispatchToProps = (dispatch) => ({
  setCurrency: () => dispatch(getApiCurrency()),
});
const mapStateToProps = (state) => ({
  getCurrency: state.wallet.currencies,
});

SelectMoedas.propTypes = {
  getCurrency: PropTypes.func.isRequired,
  setCurrency: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(SelectMoedas);
