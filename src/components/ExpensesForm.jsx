import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from './Input';

export class ExpensesForm extends Component {
  render() {
    return (
      <form>
        <Input type="number" name="Valor" />
        <Input type="text" name="Descrição" />
        <label htmlFor="select-currency">
          Moeda
          <select name="currency" id="select-currency">
            <option value=""> </option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
