import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrency } from '../actions/index';

class Select extends Component {
  componentDidMount() {
    const { currentDispatch } = this.props;
    currentDispatch();
  }

  render() {
    const { currentyCodes, value, onChange } = this.props;
    return (
      <div>
        <label htmlFor="current">
          Moeda
          <select
            id="current"
            name="currency"
            value={ value }
            onChange={ onChange }
          >
            { currentyCodes.map((code, index) => (
              <option value={ code } key={ index }>
                { code }
              </option>
            )) }
          </select>
        </label>
      </div>
    );
  }
}

Select.propTypes = {
  currentDispatch: PropTypes.func.isRequired,
  currentyCodes: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentyCodes: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  currentDispatch: () => dispatch(fetchCurrency()),
});

// export default Select;
export default connect(mapStateToProps, mapDispatchToProps)(Select);
