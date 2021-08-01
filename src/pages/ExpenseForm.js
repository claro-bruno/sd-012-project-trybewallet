import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, string } from 'prop-types';

class ExpenseForm extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { apiResponse } = this.props;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input id="valor" type="text" />
        </label>

        <label htmlFor="descricao">
          Descrição
          <input id="descricao" type="text" />
        </label>

        <label htmlFor="moeda">
          Moedas
          <select id="moeda">
            {
              apiResponse.map(
                (moeda,
                  index) => (<option key={ index } value={ moeda }>{moeda}</option>),
              )
            }
          </select>
        </label>

        <label htmlFor="pagamento">
          Método de pagamento
          <select id="pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="categoria">
          Tag
          <select id="categoria">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  apiResponse: state.wallet.currencies,
});

ExpenseForm.propTypes = ({
  apiResponse: arrayOf(string).isRequired,
});

export default connect(mapStateToProps, null)(ExpenseForm);
