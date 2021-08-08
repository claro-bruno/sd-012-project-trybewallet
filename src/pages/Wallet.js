import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/Form';
import usandoAfetch from '../actions/fetchAction';

class Wallet extends React.Component {
  componentDidMount() {
    const { voltaMoedas } = this.props;
    voltaMoedas();
  }

  render() {
    const { myEmail, moedas } = this.props;
    return (
      <main>
        <header>
          <p data-testid="email-field">
            {`E-mail: ${myEmail}`}
          </p>
          <p data-testid="total-field">
            Despesas totais: 0
          </p>
          <p data-testid="header-currency-field">
            BRL:
          </p>
        </header>
        <Form moedas={ moedas } />
      </main>
    );
  }
}

Wallet.propTypes = {
  myEmail: PropTypes.string.isRequired,
  moedas: PropTypes.arrayOf(PropTypes.string).isRequired,
  voltaMoedas: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  voltaMoedas: () => dispatch(usandoAfetch()),
});

const mapStateToProps = (state) => ({
  myEmail: state.user.email,
  moedas: state.wallet.moedas,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
