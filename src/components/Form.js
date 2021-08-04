import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI } from '../actions';

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

  handleChange({ target: { value, id } }) {
    this.setState({ [id]: value });
  }

  async handleClick(e) {
    e.preventDefault();
    const { fetchCurrency, currencies } = this.props;
    this.setId();
    await fetchCurrency();

    const { id, value, description, currency, method, tag } = this.state;
    /* const total = 0;
    const currentRate = currencies[currency].ask; // falta dispatch
    const totalCalc = total + parseFloat(currentRate * value).toFixed(2); // falta dispatch */

    const objTSubmit = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: currencies,
    };
    console.log(objTSubmit);
  }

  render() {
    const { currencies } = this.props;

    return (
      <form className="wallet__form">
        <InputValue onChange={ this.handleChange } />
        <Description onChange={ this.handleChange } />
        <LabelCurrency currencies={ currencies } />
        <Method onChange={ this.handleChange } />
        <SelectTag onChange={ this.handleChange } />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  currencies: PropTypes.shape(Object).isRequired,
  fetchCurrency: PropTypes.func.isRequired,
};
