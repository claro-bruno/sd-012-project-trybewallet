import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Select from '../components/Select';
import InputDescrition from '../components/InputDescription';
import InputExpense from '../components/InputExpense';
import SelectPayment from '../components/SelectPayment';
import InputTag from '../components/InputTag';
import { totalExpense } from '../actions/actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      total: 0,
      value: '',
      current: 'BRL',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { userEmail } = this.props; // vem do Provider ou connect
    const {
      id,
      total,
      value,
      current,
      description,
      currency,
      method,
      tag,
    } = this.state;
    return (
      <section>
        <header>
          <span>
            <p data-testid="email-field">{ `Email: ${userEmail}` }</p>
            <p data-testid="total-field">{`Valor: ${total}`}</p>
            <p data-testid="header-currency-field">
              { `Moeda: ${current}` }
            </p>
          </span>
        </header>
        <section>
          <form>
            <InputExpense
              value={ value }
              onChange={ this.handleChange }
            />
            <InputDescrition
              value={ description }
              onChange={ this.handleChange }
            />
            <Select />
            <InputTag />
            <SelectPayment />
            <button
              type="button"
            >
              Adicionar despesa
            </button>
          </form>
        </section>
      </section>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string,
}.isRequired;

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchExpenses: (value) => dispatch(totalExpense(value))
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
