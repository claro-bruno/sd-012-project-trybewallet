import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectPayment extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     payments: [
  //       {
  //         value: 'Dinheiro',
  //         text: 'Dinheiro',
  //       },
  //       {
  //         value: 'Cartão de crédito',
  //         text: 'Cartão de crédito',
  //       },
  //       {
  //         value: 'Cartão de débito',
  //         text: 'Cartão de débito',
  //       },
  //     ],
  //   };
  // }

  render() {
    // const { payments } = this.state;
    const { onChange } = this.props;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          id="method"
          name="method"
          onChange={ onChange }
          // options={ payments }
          // value={ value }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

SelectPayment.propTypes = {
  // value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectPayment;
