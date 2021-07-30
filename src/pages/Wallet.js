import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies, addExpense } from '../actions';
import Header from '../components/Header';
import Valor from '../components/Valor';
import Description from '../components/Description';
import Currency from '../components/Currency';
import Method from '../components/Method';
import Tag from '../components/Tag';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.addToExpenses = this.addToExpenses.bind(this);
  }

  componentDidMount() {
    const { renderCurrencies } = this.props;
    renderCurrencies();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  addToExpenses() {
    const { addExpenseChange } = this.props;
    addExpenseChange(this.state);
  }

  render() {
    const { email, currencies, loading } = this.props;
    const { valor, description, currency, method, tag } = this.state;
    return (
      <div>
        <Header email={ email } />
        <form>
          <Valor valor={ valor } handleChange={ this.handleChange } />
          <Description description={ description } handleChange={ this.handleChange } />
          <Currency
            currency={ currency }
            currencies={ currencies }
            loading={ loading }
            handleChange={ this.handleChange }
          />
          <Method method={ method } handleChange={ this.handleChange } />
          <Tag tag={ tag } handleChange={ this.handleChange } />
          <button type="button" onClick={ this.addToExpenses }>Adicionar Despesa</button>
        </form>
      </div>);
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.shape({ code: PropTypes.string })).isRequired,
  loading: PropTypes.bool.isRequired,
  renderCurrencies: PropTypes.func.isRequired,
  addExpenseChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  loading: state.wallet.loading,
});

const mapDispatchToProps = (dispatch) => ({
  renderCurrencies: () => dispatch(fetchCurrencies()),
  addExpenseChange: (payload) => dispatch(addExpense(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
