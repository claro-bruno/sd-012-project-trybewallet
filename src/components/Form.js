import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import CurrencySelectForm from './CurrencySelectForm';
import DescriptionInputForm from './DescriptionInputForm';
import PaymentMethodSelectForm from './PaymentMethodSelectForm';
import TagSelectForm from './TagSelectForm';
import ValueInputForm from './ValueInputForm';
import fetchCurrenciesExp from '../fetchs/FetchCurrenciesExp';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleGetState = this.handleGetState.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  // Essa parte do requisito 8 retirei da colega Cristina Pieda
  handleGetState() {
    const { getValue } = this.props;
    getValue(this.state);
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
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
        <button
          type="button"
          name="add"
          onClick={ this.handleGetState }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  getValue: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getValue: (expenses) => dispatch(fetchCurrenciesExp(expenses)),
});

export default connect(null, mapDispatchToProps)(Form);
