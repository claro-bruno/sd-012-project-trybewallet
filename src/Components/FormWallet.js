import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import { selects } from '../service/selects';
import './FormWalletStyle.css';

class FormWallet extends React.Component {
  render() {
    const { value, description, currency, handleChange } = this.props;
    return (
      <form className="form-wallet-container">
        <Input
          id="valor"
          labelName="Valor:"
          type="number"
          name="value"
          value={ value }
          handleChange={ handleChange }
        />
        <Input
          id="descricao"
          labelName="Descrição:"
          type="text"
          name="description"
          value={ description }
          handleChange={ handleChange }
          placeholder="Digite aqui"
        />
        <label htmlFor="moeda">
          Moeda:
          <select
            id="moeda"
            name="currency"
            value={ currency }
            onChange={ handleChange }
          >
            <option>teste</option>
          </select>
        </label>
        {selects.map(({ labelName, options, id, name }) => (<Select
          labelName={ labelName }
          id={ id }
          name={ name }
          change={ handleChange }
          options={ options }
          key={ id }
        />))}
      </form>
    );
  }
}

FormWallet.propTypes = {
  description: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default FormWallet;
