import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class Currencies extends Component {
  render() {
    const { options } = this.props;
    return (
      <label htmlFor="moeda">
        <select data-testid="moeda">
          {
            options.map((currency, index) => (
              <option key={ currency[index] } value={ currency }>
                { currency }
              </option>
            ))
          }
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  options: state.saveData.data,
});

Currencies.propTypes = {
  options: propTypes.arrayOf().isRequired,
};

export default connect(mapStateToProps)(Currencies);
