import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import Input from '../Input';
// import Select from '../Select';

class Form extends React.Component {
  render() {
    // const { moedas, moeda, handleChange } = this.props;
    return (
      <form>
        {/* <Input
          label="Valor"
          id="valor-id"
          type="text"
          name="valor"
          value={ valor }
          onChange={ handleChange }
        />
        <Input
          label="Descrição"
          id="descricao-id"
          type="text"
          name="descricao"
          value={ descricao }
          onChange={ handleChange }
        />
        <Select
          label="Moeda"
          id="moeda-id"
          value={ moeda }
          name="moeda"
          options={ moedas }
          onChange={ handleChange }
        />
        <Select
          label="Método de pagamento"
          id="pagamento-id"
          value={ metodo }
          name="metodo"
          options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          onChange={ handleChange }
        />
        <Select
          label="Tag"
          id="categoria-id"
          value={ tag }
          name="tag"
          options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          onChange={ handleChange }
        /> */}
      </form>
    );
  }
}

Form.propTypes = {
  getCurrency: PropTypes.arrayOf(Object),
}.isRequired;

export default connect(null, null)(Form);
