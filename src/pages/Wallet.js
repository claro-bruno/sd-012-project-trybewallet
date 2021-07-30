import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form';
import Header from '../components/Header';
import { walletChange } from '../redux/actions';

const Wallet = ({ setWallet }) => {
  useEffect(() => {

  }, []);

  const fetchAPI = async () => {
    let result = await fetch('https://economia.awesomeapi.com.br/json/all');
    result = await result.json();
    return result;
  };

  return (
    <div>
      <Header />
      <Form />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setWallet: (value) => dispatch(walletChange(value)),
});

export default connect(null, mapDispatchToProps)(Wallet);
