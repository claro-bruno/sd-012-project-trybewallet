import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../components/Input';
import actionApi from '../actions/actionApi';
import Header from '../components/Header';
import Currencies from '../components/Currencies';
import Method from '../components/Method';
import Tag from '../components/Tag';
import actionSave from '../actions/actionSave';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      value: '0',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };
  }

  componentDidMount() {
    const { createCurrency } = this.props;
    createCurrency();
  }

  onSubmit() {
    const { saveData } = this.props;
    saveData(this.state);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState(({ [name]: value }));
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <Header />
        <div>
          <Input
            type="text"
            dataTestid="value"
            message="Valor:"
            value={ value }
            handleChange={ this.handleChange }
          />
          <Currencies
            onChange={ this.handleChange }
            value={ currency }
          />
          <Method
            onChange={ this.handleChange }
            value={ method }
          />
          <label htmlFor="tag">
            Tag
            <select
              id="tag"
              name="tag"
              onChange={ this.handleChange }
              value={ tag }
            >
              <Tag />
            </select>
          </label>
          <Input
            type="text"
            dataTestid="description"
            message="Descrição"
            value={ description }
            handleChange={ this.handleChange }
          />
          <button
            type="button"
            onClick={ this.onSubmit }
          >
            Adicionar despesa
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  emailSetted: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  createCurrency: (currencies) => dispatch(actionApi(currencies)),
  saveData: (currencies) => dispatch(actionSave(currencies)),
});

Wallet.propTypes = {
  saveData: propTypes.func.isRequired,
  createCurrency: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
