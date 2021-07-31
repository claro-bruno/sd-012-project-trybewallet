import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Input from '../components/Input';
import Select from '../components/Select';
import { TAGS, PAYMENT } from '../data';
import { fetchCoins } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { setCoins } = this.props;
    setCoins();
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <form>
          <Header />
          <Input type="text" name="valor" text="Valor" />
          <Select name="coin" text="Moeda" content={ currencies } />
          <Select name="payment" text="Método de Pagamento" content={ PAYMENT } />
          <Input type="text" name="description" text="Descrição" />
          <Select name="tag" text="Tag:" content={ TAGS } />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCoins: () => dispatch(fetchCoins()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Wallet.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCoins: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
