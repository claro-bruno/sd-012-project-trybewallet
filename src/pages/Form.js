import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputNumber from '../Components/InputNumber';
import ImputText from '../Components/InputText';
import SelectCurrency from '../Components/SelectCurrency';
import SelectPayMethods from '../Components/SelectPayMethods';
import SelectTag from '../Components/SelectTag';
import dataPayMethods from '../data/dataPayMethods';
import dataTag from '../data/dataTag';

class Form extends React.Component {
  render() {
    const { currencies } = this.props;
    return (
      <form>
        <InputNumber
          id="expenseValue"
          label="Valor"
        />
        <ImputText
          id="expenseText"
          label="Descrição"
        />
        <SelectCurrency
          id="selectCurrency"
          label="Moeda"
          options={ currencies }
        />
        <SelectPayMethods
          id="payMethods"
          label="Método de pagamento"
          options={ dataPayMethods }
        />
        <SelectTag
          id="tagExpense"
          label="Tag"
          options={ dataTag }
        />
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Form);
