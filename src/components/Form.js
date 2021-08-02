import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from './select';
import { fetchAPI } from '../actions';
import Input from './Input';

const Form = ({ coin, dispatchFetch }) => {
  const [id, getId] = useState(0);
  const [quantity, getQuantity] = useState('0');
  const [describe, getDescribe] = useState('');
  const [currency, getCurrency] = useState('USD');
  const [payment, getPayment] = useState('Dinheiro');
  const [tag, getTag] = useState('Alimentação');

  const arrayToOptions = {
    paymentType: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
    tag: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
  };

  const stateToStore = () => {
    const obj = {
      id,
      value: quantity,
      description: describe,
      currency,
      method: payment,
      tag,
    };
    dispatchFetch(obj);
    getId(id + 1);
  };

  return (
    <form>
      <Input getQuantity={ getQuantity } getDescribe={ getDescribe } />
      <Select
        currency={ getCurrency }
        payment={ getPayment }
        tag={ getTag }
        coin={ coin }
        paymentType={ arrayToOptions.paymentType }
        tagArray={ arrayToOptions.tag }
      />
      <button type="button" onClick={ () => stateToStore() }>Adicionar despesa</button>
    </form>
  );
};

Form.propTypes = {
  coin: PropTypes.arrayOf(PropTypes.string),
  dispatchFetch: PropTypes.func.isRequired,
};

Form.defaultProps = {
  coin: ['BRL'],
};

const mapDispatchToProps = (dispatch) => ({
  dispatchFetch: (obj) => dispatch(fetchAPI(obj)),
});

export default connect(null, mapDispatchToProps)(Form);
