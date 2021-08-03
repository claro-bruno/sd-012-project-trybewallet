import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchApi from '../actions/apiFetch';

class Select extends React.Component {
  componentDidMount() {
    const { fetching } = this.props;
    fetching();
  }

  render() {
    const { currencies } = this.props;
    const { handleChange } = this.props;
    return (
      <>
        <label htmlFor="Moeda">
          <select id="Moeda">
            {
              currencies
                .map((coin) => <option key={ coin } value={ coin }>{ coin }</option>)
            }
          </select>
        </label>
        <label htmlFor="Método de pagamento">
          Método de pagamento
          <select id="Método de pagamento" onChange={ handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="Tag">
          Tag
          <select id="Tag" onChange={ handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </>
    );
  }
}
Select.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetching: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
const mapStateToProps = ({ wallet }) => ({ currencies: wallet.currencies });

const mapDispatchToProps = (dispacth) => ({
  fetching: (expenses) => dispacth(fetchApi(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Select);
