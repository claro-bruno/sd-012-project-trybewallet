import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../components/Input';
import actionApi from '../actions/actionApi';
import actionSaveData from '../actions/actionSaveData';
import Currencies from '../components/Currencies';
import fetchApiEconomy from '../actions/fetchApiEconomy';
import Method from '../components/Method';
import Tag from '../components/Tag';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      valueEntry: '0',
      currency: [],
      method: [],
      tag: '',
      description: '',
    };
  }

  componentDidMount() {
    const { saveDataRedux } = this.props;
    fetchApiEconomy().then((response) => saveDataRedux(response));
  }

  handleSubmit(e) {
    e.preventDefault();
    const { currency } = this.state;
    const { createCurrency } = this.props;
    createCurrency(currency);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState(({ [name]: value }));
  }

  render() {
    const { valueEntry } = this.state;
    const { emailSetted } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">{ `Email: ${emailSetted}` }</p>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <div>
          <Input
            type="valor"
            message="Valor:"
            value={ valueEntry }
            handleChange={ this.handleChange }
          />
          <Currencies />
          <Method />
          <Tag />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailSetted: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  createCurrency: (currencies) => dispatch(actionApi(currencies)),
  saveDataRedux: (data) => dispatch(actionSaveData(data)),
});

Wallet.propTypes = {
  emailSetted: propTypes.string.isRequired,
  createCurrency: propTypes.func.isRequired,
  saveDataRedux: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
