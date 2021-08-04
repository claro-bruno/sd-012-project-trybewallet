import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CurrenciesForm extends React.Component {
  render() {
    const { currencies } = this.props;
    return (
      <>
        {Object.keys(currencies).map((type, index) => {
          if (type !== 'USDT') {
            return (
              <option key={ index }>
                { type }
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

CurrenciesForm.propTypes = {
  currencies: PropTypes.arrayOf().isRequired,
};

export default connect(mapStateToProps)(CurrenciesForm);
