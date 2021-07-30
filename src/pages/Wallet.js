import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import Select from '../components/Select';
import { TAGS, PAYMENT } from '../data';

class Wallet extends React.Component {
  render() {
    const { userEmail } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">
            Email:
            { userEmail }
          </p>
          <p data-testid="total-field">
            Despesa Total:
            0
            <span data-testid="header-currency-field">
              BRL
            </span>
          </p>
        </header>
        <form>
          <Input type="text" name="valor" text="Valor" />
          <Select name="coin" text="Moeda" />
          <Select name="payment" text="Método de Pagamento" content={ PAYMENT } />
          <Input type="text" name="description" text="Descrição" />
          <Select name="tag" text="Tag:" content={ TAGS } />
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
