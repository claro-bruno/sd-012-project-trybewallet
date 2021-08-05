import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CurrencySelectForm from './CurrencySelectForm';
import DescriptionInputForm from './DescriptionInputForm';
import PaymentMethodSelectForm from './PaymentMethodSelectForm';
import TagSelectForm from './TagSelectForm';
import ValueInputForm from './ValueInputForm';
import ExpensesButton from './ExpensesButton';
import fetchCurrenciesForExpenses from '../fetchs/FetchCurrenciesForExpenses';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);
    this.storeData = this.storeData.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  storeData() {
    const { state } = this;
    const { storeExpenseData } = this.props;
    storeExpenseData(state);
  }

  render() {
    return (
      <form>
        <CurrencySelectForm
          handleChange={ this.handleChange }
        />
        <DescriptionInputForm
          handleChange={ this.handleChange }
        />
        <PaymentMethodSelectForm
          handleChange={ this.handleChange }
        />
        <TagSelectForm
          handleChange={ this.handleChange }
        />
        <ValueInputForm
          handleChange={ this.handleChange }
        />
        <ExpensesButton
          storeDataFun={ this.storeData }
        />
      </form>
    );
  }
}

Form.propTypes = {
  storeExpenseData: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  storeExpenseData: (data) => dispatch(fetchCurrenciesForExpenses(data)),
});

export default connect(null, mapDispatchToProps)(Form);
