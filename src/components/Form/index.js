import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../Input';
import Select from '../Select';
import { fetchAPI } from '../../actions/currencyActions';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: 0,
      descricao: '',
      moeda: 'USD',
      metodo: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { fetchCurrency } = this.props;
    fetchCurrency();
  }

  handleChange({ target: { name, value } }) {
    this.setState((state) => ({
      ...state,
      [name]: value,
    }));
  }

  render() {
    const { moedas } = this.props;
    console.log(moedas);
    const { valor, descricao, moeda, metodo, tag } = this.state;
    return (
      <form>
        <Input
          label="Valor"
          id="valor-id"
          type="text"
          name="valor"
          value={ valor }
          onChange={ this.handleChange }
        />
        <Input
          label="Descrição"
          id="descricao-id"
          type="text"
          name="descricao"
          value={ descricao }
          onChange={ this.handleChange }
        />
        <Select
          label="Moeda"
          id="moeda-id"
          value={ moeda }
          name="moeda"
          options={ [''] }
          onChange={ this.handleChange }
        />
        <Select
          label="Método de pagamento"
          id="pagamento-id"
          value={ metodo }
          name="metodo"
          options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          onChange={ this.handleChange }
        />
        <Select
          label="Tag"
          id="categoria-id"
          value={ tag }
          name="tag"
          options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          onChange={ this.handleChange }
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  const { wallet } = state;
  return { moedas: wallet.currencies };
};

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: () => dispatch(fetchAPI()),
});

Form.propTypes = {
  getCurrency: PropTypes.arrayOf(Object),
  setCurrency: PropTypes.func.isRequired,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
