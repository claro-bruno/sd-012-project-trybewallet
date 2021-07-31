import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ExpensesSelects from './ExpensesSelects';
import ExpensesInputs from './ExpensesInputs';
import fetchWallet from '../../reducers/wallet/actions/fetchWallet';
import applyEdition from '../../reducers/wallet/actions/applyEdition';

const INITIAL_STATE = {
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

class ExpensesForm extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);

    this.state = {
      id: 0,
      ...INITIAL_STATE,
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

  handleEdit() {
    const {
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;

    const { applyEdit, editID, exitEditSection } = this.props;

    applyEdit({
      id: editID,
      value,
      description,
      currency,
      method,
      tag,
    });
    exitEditSection();
    this.setState({ ...INITIAL_STATE });
  }

  render() {
    const { currencies, editing } = this.props;
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
        {!editing
          ? (
            <button
              type="button"
              onClick={ this.handleSubmit }
            >
              Adicionar Despesa
            </button>
          ) : (
            <button
              type="button"
              onClick={ this.handleEdit }
            >
              Editar despesa
            </button>
          )}
      </form>
    );
  }
}

ExpensesForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  editing: PropTypes.bool.isRequired,
  editID: PropTypes.number.isRequired,
  fetching: PropTypes.func.isRequired,
  applyEdit: PropTypes.func.isRequired,
  exitEditSection: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetching: (expenses) => dispatch(fetchWallet(expenses)),
  applyEdit: (keys) => dispatch(applyEdition(keys)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
