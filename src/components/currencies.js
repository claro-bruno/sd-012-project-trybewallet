import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Currencies extends Component {
  render() {
    const { currencies } = this.props;
    return (
      <>
        {currencies.map((itens, index) => {
          if (itens !== 'USDT') {
            return (
              <option key={ index }>
                { itens }
              </option>);
          }
          return null;
        })}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Currencies);

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
