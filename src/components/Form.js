import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI, addExpenses } from '../actions';

import InputValue from './subComponents/InputValue';
import Description from './subComponents/Description';
import LabelCurrency from './subComponents/LabelCurrency';
import Method from './subComponents/Method';
import SelectTag from './subComponents/SelectTag';
import SubmitButton from './subComponents/SubmitButton';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.setId = this.setId.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { fetchCurrency } = this.props;
    fetchCurrency();
  }

  setId() {
    const { id } = this.state;
    this.setState(() => ({
      id: id + 1,
    }));
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  async handleClick() {
    const { fetchCurrency, dispatchExpenses, currencies: exchangeRates } = this.props;
    await fetchCurrency();

    dispatchExpenses({ ...this.state, exchangeRates });
    this.setState(() => ({
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    }));

    this.setId();
  }

  render() {
    const { currencies } = this.props;
    const { currency, method, tag, value, description } = this.state;

    return (
      <form className="wallet__form">
        <InputValue onChange={ this.handleChange } value={ value } />
        <Description onChange={ this.handleChange } description={ description } />
        <LabelCurrency
          onChange={ this.handleChange }
          currencies={ currencies }
          currency={ currency }
        />
        <Method onChange={ this.handleChange } method={ method } />
        <SelectTag onChange={ this.handleChange } tag={ tag } />
        <SubmitButton onClick={ this.handleClick } />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: () => dispatch(fetchAPI()),
  dispatchExpenses: (expenses) => dispatch(addExpenses(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  currencies: PropTypes.shape(Object).isRequired,
  fetchCurrency: PropTypes.func.isRequired,
  dispatchExpenses: PropTypes.func.isRequired,
};
