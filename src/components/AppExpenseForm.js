/* eslint-disable max-lines-per-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from './Input';
import CurrencySelect from './CurrencySelect';
import PaymentSelect from './PaymentSelect';
import TagSelect from './TagSelect';
// import PropTypes from 'prop-types';

class AppExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valor: '',
      descricao: '',
      moeda: '',
      pagamento: '',
      tag: '',
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.isValid = this.isValid.bind(this);
  }

  render() {
    const { valor, descricao, moeda, pagamento, tag } = this.state;

    return (
      <section>
        <Input
          name="valor"
          label="Valor: "
          type="text"
          value={ valor }
          placeholder="Insira o valor da despesa"
          onChange={ () => console.log('Input Valor') }
        />
        <Input
          name="descricao"
          label="Descrição: "
          type="text"
          value={ descricao }
          placeholder="Insira descrição da despesa"
          onChange={ () => console.log('Imput Descricao') }
        />
        <CurrencySelect
          value={ moeda }
          onChange={ () => console.log('Select Moeda') }
        />
        <PaymentSelect
          value={ pagamento }
          onChange={ () => console.log('Select Pagamento') }
        />
        <TagSelect
          value={ tag }
          onChange={ () => console.log('Select Tag') }
        />
      </section>
    );
  }
}

// AppExpenseForm.propTypes = {
//   email: PropTypes.string.isRequired,
//   currencies: PropTypes.arrayOf().isRequired,
//   expenses: PropTypes.arrayOf().isRequired,
// };

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(AppExpenseForm);
