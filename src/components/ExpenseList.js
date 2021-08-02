import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ExpenseList extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <section>
        <ul>
          { expenses.map((item, index) => (
            <li key={ index }>
              <p>{ item.descricao }</p>
              <p>{ item.tag }</p>
              <p>{ item.pagamento }</p>
              <p>{ item.valor }</p>
              <p>{ item.moeda }</p>
              {/* <p>{ cambio }</p>
              <p>{ valorConvertido }</p>
              <p>{ moedaConversao }</p>
              <p>{ cambio }</p> */}
              <button
                type="button"
                value={ index }
                onClick={ () => console.log('Excluir') }
              >
                Excluir
              </button>
              <button
                type="button"
                value={ index }
                onClick={ () => console.log('Editar') } // REQUISITO 11
              >
                Editar
              </button>
            </li>))}
        </ul>
      </section>
    );
  }
}

ExpenseList.propTypes = {
  // email: PropTypes.string.isRequired,
  // currencies: PropTypes.arrayOf().isRequired,
  expenses: PropTypes.arrayOf().isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(ExpenseList);
