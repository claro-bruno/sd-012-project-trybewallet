import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Select from '../components/Select';
import InputDescrition from '../components/InputDescription';
import InputExpense from '../components/InputExpense';
import SelectPayment from '../components/SelectPayment';
import InputTag from '../components/InputTag';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      value: '',
      current: 'BRL',
      description: '',
      // currency: '',
      // method: '',
      // tag: '',
      // exchangeRates: '',
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
      total,
      value,
      current,
      description,
      // currency,
      // method,
      // tag,
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
            <button type="submit">Adicionar despesa</button>
          </form>
        </section>
      </section>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
