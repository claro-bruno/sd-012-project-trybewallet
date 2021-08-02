import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import { fetchCurrencies } from '../actions';

const inputValues = {
  type: 'text',
  name: 'value',
  id: 'value',
};
const inputDescription = {
  type: 'text',
  name: 'description',
  id: 'description',
};
const selectCurrency = {
  name: 'currency',
  id: 'currency',
  currencies: ['BRL'],
};
const selectMethod = {
  name: 'method',
  id: 'method',
  methods: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
};
const selectTag = {
  name: 'tag',
  id: 'tag',
  tags: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
};

class CostsForm extends React.Component {
  componentDidMount() {
    const { currencies } = this.props;
    currencies();
  }

  render() {
    const { coins } = this.props;
    return (
      <form>
        <Input
          inputLabel="Valor: "
          inputProps={ inputValues }
        />
        <Select
          selectLabel="Moeda: "
          selectProps={ selectCurrency }
          selectOptions={ coins }
        />
        <Select
          selectLabel="Método de pagamento: "
          selectProps={ selectMethod }
          selectOptions={ selectMethod.methods }
        />
        <Select
          selectLabel="Tag: "
          selectProps={ selectTag }
          selectOptions={ selectTag.tags }
        />
        <Input
          inputLabel="Descrição: "
          inputProps={ inputDescription }
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  coins: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  currencies: (result) => dispatch(fetchCurrencies(result)),
});

CostsForm.propTypes = {
  currencies: PropTypes.func.isRequired,
  coins: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CostsForm);
