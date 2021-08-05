import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionFatchCurencies } from '../../actions';

class Moeda extends Component {
  componentDidMount() {
    const { fatchCurrency } = this.props;
    fatchCurrency();
  }

  render() {
    const { currencies, hadlechange, value } = this.props;
    return (
      <div>
        <label htmlFor="Moeda">
          Moeda:
          <select id="Moeda" name="currency" value={ value } onChange={ hadlechange }>
            {
              currencies
                .map((currencyName) => (
                  <option
                    key={ currencyName }
                  >
                    {currencyName}
                  </option>
                ))
            }
          </select>
        </label>
      </div>
    );
  }
}

Moeda.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  hadlechange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  fatchCurrency: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fatchCurrency: () => dispatch(actionFatchCurencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Moeda);
