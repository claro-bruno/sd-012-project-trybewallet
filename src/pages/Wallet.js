import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/Form';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <section className="content">
        <header>
          <p data-testid="email-field">
            E-mail:
            {' '}
            {email}
          </p>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <Form
          value="Valor"
          description="Descrição"
          currency="Moeda"
          payment="Método de pagamento"
          tag="Tag"
        />
      </section>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
