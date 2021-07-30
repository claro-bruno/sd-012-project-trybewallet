import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import SelectInput from '../components/SelectInput';

const CATEGORIES = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
const PAYMENT_METHOD = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      currency: 'BRL',
      exValue: '0',
      desc: '',
      currencies: [],
      payment: '',
      category: '',
      expenseCurrency: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
  }

  handleChange(event) {
    const {
      target: { value, name },
    } = event;
    this.setState({
      [name]: value,
    });
  }

  renderHeader() {
    const {
      total,
      currency,
    } = this.state;
    const { userEmail } = this.props;
    return (
      <header>
        <span data-testid="email-field">{`Email: ${userEmail}`}</span>
        <span data-testid="total-field">{`Despesa Total: R$ ${total}`}</span>
        <span data-testid="header-currency-field">{`Moeda: ${currency}`}</span>
      </header>);
  }

  render() {
    const {
      exValue,
      desc,
      currencies,
      payment,
      category,
      expenseCurrency,
    } = this.state;
    return (
      <div>
        {this.renderHeader()}
        <form>
          <Input name="exValue" value={ exValue } handleChange={ this.handleChange }>
            Valor:
          </Input>
          <Input name="desc" value={ desc } handleChange={ this.handleChange }>
            Descrição:
          </Input>
          <SelectInput
            name="expenseCurrency"
            value={ expenseCurrency }
            handleChange={ this.handleChange }
            optionsArray={ currencies }
          >
            Moeda:
          </SelectInput>
          <SelectInput
            name="payment"
            value={ payment }
            handleChange={ this.handleChange }
            optionsArray={ PAYMENT_METHOD }
          >
            Método de pagamento:
          </SelectInput>
          <SelectInput
            name="category"
            value={ category }
            handleChange={ this.handleChange }
            optionsArray={ CATEGORIES }
          >
            Tag:
          </SelectInput>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
