import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import InputValue from './subComponents/InputValue';
import Description from './subComponents/Description';
import LabelCurrency from './subComponents/LabelCurrency';
import Method from './subComponents/Method';
import SelectTag from './subComponents/SelectTag';

class Form extends Component {
  render() {
    return (
      <form className="form">
        <InputValue />
        <Description />
        <LabelCurrency />
        <Method />
        <SelectTag />
      </form>
    );
  }
}

/* const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

}; */

export default connect()(Form);

SelectTag.propTypes = {
  onChange: PropTypes.func.isRequired,
};
