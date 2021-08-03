import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form';
import Header from '../components/Header';
import { walletChange } from '../actions';
import Table from '../components/Table';

const Wallet = () => {
  const [code, setCode] = useState([]);

  const fetchAPI = async () => {
    let result = await fetch('https://economia.awesomeapi.com.br/json/all');
    result = await result.json();
    const rmUSDT = Object.keys(result).filter((e) => e !== 'USDT');
    setCode(rmUSDT);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div>
      <Header />
      <Form coin={ code } />
      <Table />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setWallet: (value) => dispatch(walletChange(value)),
});

export default connect(null, mapDispatchToProps)(Wallet);
