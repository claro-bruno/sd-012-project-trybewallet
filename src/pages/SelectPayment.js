import React from 'react';
import { func } from 'prop-types';
import { methodArr } from '../componentData/index';

class SelectPayment extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label htmlFor="pagamento">
        Método de pagamento
        <select
          id="pagamento"
          name="method"
          data-testid="method-input"
          onChange={ handleChange }
        >
          {methodArr.map((e, index) => <option key={ index }>{ e }</option>)}
        </select>
      </label>
    );
  }
}

SelectPayment.propTypes = {
  handleChange: func.isRequired,
};

export default SelectPayment;
