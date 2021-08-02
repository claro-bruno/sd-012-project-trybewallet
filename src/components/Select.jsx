import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes, { string } from 'prop-types';
import { fetchAPI } from '../actions/index';

class Select extends Component {
  componentDidMount() {
    const { coins } = this.props;
    coins();
  }

  render() {
    const { currencies } = this.props;
    const arrays = {
      type: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
      tag: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
    };
    return (
      <>
        <label htmlFor="Moeda">
          Moeda
          <select id="Moeda">
            {
              currencies.map((elm) => <option key={ elm }>{ elm }</option>)
            }
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select id="payment">
            {
              arrays.type.map((elm) => <option key={ elm }>{elm}</option>)
            }
          </select>
        </label>
        <label htmlFor="Tag">
          Tag
          <select id="Tag">
            {
              arrays.tag.map((elm) => <option key={ elm }>{elm}</option>)
            }
          </select>
        </label>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  coins: () => dispatch(fetchAPI()),
});

Select.propTypes = {
  coins: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Select);
