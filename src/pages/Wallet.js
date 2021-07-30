import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form';
import Header from '../components/Header';
import { walletChange } from '../redux/actions';

const Wallet = () => {
  const [code, setCode] = useState([]);

  const fetchAPI = async () => {
    let result = await fetch('https://economia.awesomeapi.com.br/json/all');
    result = await result.json();
    setCode(Object.keys(result));
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div>
      <Header />
      <Form coin={ code } />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setWallet: (value) => dispatch(walletChange(value)),
});

export default connect(null, mapDispatchToProps)(Wallet);
