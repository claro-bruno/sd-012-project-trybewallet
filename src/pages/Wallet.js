import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header, Menu, Table } from '../components';
// import { userInfo, walletInfo } from '../actions';
import options from '../data';
import './Wallet.css';

class Wallet extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: '',
      total: 0,
      localCurrency: {
        code: 'R$',
        symbol: 'BRL',
      },
      value: '',
      exchangeCurrency: options.currencies[0].name,
      method: options.methods[0].name,
      tag: options.tags[0].name,
      description: '',
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  render() {
    const {
      user: {
        email,
      },
    } = this.props;

    const {
      total,
      localCurrency,
      value,
      exchangeCurrency,
      method,
      tag,
      description,
    } = this.state;

    return (
      <div className="wallet-container">
        <Header email={ email } total={ total } localCurrency={ localCurrency } />
        <Menu
          value={ value }
          exchangeCurrency={ exchangeCurrency }
          method={ method }
          tag={ tag }
          description={ description }
          onChange={ this.handleChange }
        />
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

Wallet.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
