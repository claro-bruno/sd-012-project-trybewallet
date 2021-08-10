import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI } from '../../actions';

class SelectCurrency extends Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { wallet: { currencies } } = this.props;
    return (
      <div>
        <label htmlFor="input-currency">
          Moeda
          <select
            id="input-currency"
            placeholder="adicionar moeda"
          >
            { Object.values(currencies).map((currencie, index) => (
              <option value={ currencie } key={ index }>
                {currencie}
              </option>
            )) }
          </select>
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchAPI()),
});

SelectCurrency.propTypes = {
  wallet: PropTypes.shape({
    currencies: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ])),
  }).isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectCurrency);
