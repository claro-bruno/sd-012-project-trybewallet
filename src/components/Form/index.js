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
      valor: '',
      descricao: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { setCurrency } = this.props;
    setCurrency();
  }

  handleChange({ target: { name, value } }) {
    this.setState((state) => ({
      ...state,
      [name]: value,
    }));
  }

  render() {
    const { valor, descricao } = this.state;
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
          options={ ['moeda'] }
        />
        <Select
          label="Método de pagamento"
          id="pagamento-id"
          options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
        />
        <Select
          label="Tag"
          id="categoria-id"
          options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  getCurrency: state.wallet.currency,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrency: () => dispatch(fetchAPI()),
});

Form.propTypes = {
  getCurrency: PropTypes.arrayOf(Object),
  setCurrency: PropTypes.func.isRequired,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
