import React from 'react';
import CurrencySelectForm from './CurrencySelectForm';
import DescriptionInputForm from './DescriptionInputForm';
import PaymentMethodSelectForm from './PaymentMethodSelectForm';
import TagSelectForm from './TagSelectForm';
import ValueInputForm from './ValueInputForm';

class Form extends React.Component {
  render() {
    return (
      <form>
        <CurrencySelectForm />
        <DescriptionInputForm />
        <PaymentMethodSelectForm />
        <TagSelectForm />
        <ValueInputForm />
      </form>
    );
  }
}

export default Form;
