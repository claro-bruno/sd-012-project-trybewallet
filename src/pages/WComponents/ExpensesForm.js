import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ExpensesSelects from './ExpenseSelects';
import ExpensesInputs from './ExpensesInputs';
import fetchWallet from '../../reducers/wallet/actions/fetchWallet';

class ExpensesForm extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { fetching } = this.props;
    fetching();
  }

  handleChange({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  handleSubmit() {
    const { fetching } = this.props;
    fetching(this.state);
    this.setState(({ id }) => ({
      id: id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    }));
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <ExpensesInputs
          value={ value }
          description={ description }
          handleChange={ this.handleChange }
        />
        <ExpensesSelects
          currencies={ currencies }
          currency={ currency }
          method={ method }
          tag={ tag }
          handleChange={ this.handleChange }
        />
        <button
          type="button"
          onClick={ () => { this.handleSubmit(); } }
        >
          Adicionar Despesa
        </button>
      </form>
    );
  }
}

ExpensesForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetching: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet }) => ({ currencies: wallet.currencies });

const mapDispatchToProps = (dispacth) => ({
  fetching: (expenses) => dispacth(fetchWallet(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
