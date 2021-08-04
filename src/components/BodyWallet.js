import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getKeys from '../actions/getKeys';
import saveData from '../actions/saveData';
import InputValue from './bodyComponents/InputValue';
import SelectCurrency from './bodyComponents/SelectCurrency';
import Method from './bodyComponents/Method';
import Tag from './bodyComponents/Tag';
import Descript from './bodyComponents/Descript';
import Button from './bodyComponents/Button';

class BodyWallet extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };
  }

  componentDidMount() {
    const { fetchCurrency } = this.props;
    fetchCurrency();
  }

  handleClick() {
    const { saveButton } = this.props;
    saveButton(this.state);
    // setApiObjects();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { value, currency, method, tag, description } = this.state;

    return (

      <form>
        <InputValue
          id="value"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        />
        <SelectCurrency
          id="currency"
          name="currency"
          value={ currency }
          onChange={ this.handleChange }
        />
        <Method
          id="method"
          name="method"
          onChange={ this.handleChange }
          value={ method }
        />
        <Tag
          id="tag"
          name="tag"
          value={ tag }
          onChange={ this.handleChange }
        />
        <Descript
          id="description"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />
        <Button
          onClick={ this.handleClick }
        />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: (currency) => dispatch(getKeys(currency)),
  saveButton: (currencies) => dispatch(saveData(currencies)),
});

export default connect(null, mapDispatchToProps)(BodyWallet);

BodyWallet.propTypes = {
  fetchCurrency: PropTypes.func,
  currencies: PropTypes.arrayOf(PropTypes.string),
}.isRequired;
