import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { newCurrencies } from '../actions';
import Formulario from '../component/Formulario';
import Header from '../component/Header';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  async componentDidMount() {
    await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((r) => r.json())
      .then((r) => {
        const { Currencies } = this.props;
        Currencies(r);
        this.setState({
          isLoading: false,
        });
      });
  }

  render() {
    const { email } = this.props;
    const { isLoading } = this.state;
    if (isLoading === true) {
      return (
        <div>
          <h1>Carregando...</h1>
          <Header email={ email } />
        </div>
      );
    }

    return (
      <div>
        <Header email={ email } />
        <Formulario />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  Currencies: (value) => dispatch(newCurrencies(value)),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  Currencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
