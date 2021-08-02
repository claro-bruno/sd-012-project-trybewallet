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
import { fetchCurrencies } from '../actions';

class Form extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
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
          options={ [{ value: '', text: 'Vazio' }] }
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
  getCurrencies: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

export default connect(null, mapDispatchToProps)(Form);
