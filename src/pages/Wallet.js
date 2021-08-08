import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import InputTag from '../components/InputTag';
import InputForm from '../components/InputForm';
import { createListItem, fetchCurrency, fetchExpenses } from '../actions';
import ListItem from '../components/ListItem';
import InputDescription from '../components/InputDescription';
import InputCurrency from '../components/InputCurrency';
import InputMethod from '../components/InputMethod';
import ExpensesButton from '../components/ExpensesButton';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      exchangeRates: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { createItem, getRates } = this.props;
    getRates(this.state);
    createItem();
  }

  render() {
    const { myUserState } = this.props;
    return (
      <section>
        <Header myUserState={ myUserState.user } />
        <form className="form-expenses">
          <InputForm handleChange={ this.handleChange } />
          <InputCurrency handleChange={ this.handleChange } />
          <InputMethod handleChange={ this.handleChange } />
          <InputTag handleChange={ this.handleChange } />
          <InputDescription handleChange={ this.handleChange } />
          <ExpensesButton handleClick={ this.handleClick } />
        </form>
        <ListItem />
      </section>
    );
  }
}

Wallet.propTypes = {
  myUserState: PropTypes.shape(PropTypes.string.isRequired).isRequired,
  getCurrencies: PropTypes.func.isRequired,
  getRates: PropTypes.func.isRequired,
  createItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrency()),
  getRates: (name) => dispatch(fetchExpenses(name)),
  createItem: () => dispatch(createListItem()),
});

const mapStateToProps = (state) => ({
  myUserState: state,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
