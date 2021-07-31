import React from 'react';
// import { connect } from 'react-redux';
// import { func } from 'prop-types';

class ExpenseForm extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input
            id="valor"
            type="text"
          />
        </label>

        <label htmlFor="descricao">
          Descrição
          <input
            id="descricao"
            type="text"
          />
        </label>

        <label htmlFor="moeda">
          Moedas
          <select id="moeda">
            <option>a</option>
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

// const mapStateToProps = (state) => ({
//   emailFromGlobalState: state.user.email,
// });

// export default connect(mapStateToProps, null)(ExpenseForm);

// ExpenseForm.propTypes = ({
//   emailFromGlobalState: func.isRequired,
// });

export default ExpenseForm;
