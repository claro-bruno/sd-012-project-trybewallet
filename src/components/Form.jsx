import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Value from './Value';
import Description from './Description';
import Currencies from './Currencies';
import Method from './Method';
import Tag from './Tag';

class Form extends Component {
  render() {
    const { currencies, handleChange, value } = this.props;
    return (
      <form>
        <Value handleChange={ handleChange } value={ value } />
        <Description handleChange={ handleChange } />
        <Currencies currencies={ currencies } handleChange={ handleChange } />
        <Method handleChange={ handleChange } />
        <Tag handleChange={ handleChange } />
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default Form;
