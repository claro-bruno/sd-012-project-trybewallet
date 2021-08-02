import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import InputValue from './subComponents/InputValue';
import Description from './subComponents/Description';
import LabelCurrency from './subComponents/LabelCurrency';
import Method from './subComponents/Method';
import SelectTag from './subComponents/SelectTag';

import { fetchAPI } from '../actions';

class Form extends Component {
  componentDidMount() {
    const { fetchCurrency } = this.props;
    fetchCurrency();
  }

  render() {
    const { currencies } = this.props;

    return (
      <form className="form">
        <InputValue />
        <Description />
        <LabelCurrency currencies={ currencies } />
        <Method />
        <SelectTag />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: () => dispatch(fetchAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  currencies: PropTypes.shape(Object).isRequired,
  fetchCurrency: PropTypes.func.isRequired,
};
