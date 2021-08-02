import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Input';
import Selects from './Selects';
import { fetchCurrency, fetchExpenses } from '../actions';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { fetchMoedas } = this.props;
    fetchMoedas();
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleClick() {
    const { fetchExp } = this.props;

    fetchExp({ ...this.state });
    this.setState({
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
    this.setState((prevState) => ({ id: prevState.id + 1 }));
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <Input
          text="Valor: "
          type="number"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        />
        <Input
          text="Descrição: "
          type="text"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />
        <Selects
          method={ method }
          tag={ tag }
          currencies={ currencies }
          currency={ currency }
          onChange={ this.handleChange }
        />
        <button onClick={ this.handleClick } type="button">Adicionar despesa</button>
      </form>
    );
  }
}

Form.defaultProps = {
  currencies: {},
};

Form.propTypes = {
  fetchExp: PropTypes.func.isRequired,
  fetchMoedas: PropTypes.func.isRequired,
  currencies: PropTypes.shape({
    USD: PropTypes.shape({ code: PropTypes.string, ask: PropTypes.string }),
  }),
};

const mapDispatchToProps = (dispatch) => ({
  fetchMoedas: () => dispatch(fetchCurrency()),
  fetchExp: (data) => dispatch(fetchExpenses(data)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
