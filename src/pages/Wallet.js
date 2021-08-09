import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/Form';
import usandoAfetch from '../actions/fetchAction';
import Tabela from '../components/tabela';

class Wallet extends React.Component {
  componentDidMount() {
    const { voltaMoedas } = this.props;
    voltaMoedas();
  }

  render() {
    const { myEmail, total } = this.props;
    return (
      <main>
        <header>
          <p data-testid="email-field">
            {`E-mail: ${myEmail}`}
          </p>
          <p data-testid="total-field">
            Despesas totais:
            {' '}
            { total }
          </p>
          <p data-testid="header-currency-field">
            BRL:
          </p>
        </header>
        <Form />
        <Tabela />
      </main>
    );
  }
}

Wallet.propTypes = {
  myEmail: PropTypes.string.isRequired,
  voltaMoedas: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  voltaMoedas: () => dispatch(usandoAfetch()),
});
const mapStateToProps = (state) => ({
  myEmail: state.user.email,
  total: state.wallet.total,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
