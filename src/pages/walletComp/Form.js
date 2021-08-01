import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputValue from './inputs/InputValue';
import InputDescription from './inputs/InputDescription';
import InputCurrency from './inputs/InputCurrency';
import InputPayment from './inputs/InputMethod';
import InputTag from './inputs/InputTag';
import { fetchCurrencies } from '../../actions';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  onChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  submit() {
    const { sExpenses } = this.props;
    sExpenses(this.state);
    this.setState(({ id }) => ({ value: '', description: '', id: id + 1 }));
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        <form>
          <InputValue value={ value } onChange={ this.onChange } />
          <InputDescription description={ description } onChange={ this.onChange } />
          <InputCurrency currency={ currency } onChange={ this.onChange } />
          <InputPayment method={ method } onChange={ this.onChange } />
          <InputTag tag={ tag } onChange={ this.onChange } />
          <button type="button" onClick={ this.submit }>Adicionar despesa</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sExpenses: (expense) => dispatch(fetchCurrencies(expense)),
});

export default connect(null, mapDispatchToProps)(Form);

Form.propTypes = {
  sExpenses: PropTypes.func.isRequired,
};
