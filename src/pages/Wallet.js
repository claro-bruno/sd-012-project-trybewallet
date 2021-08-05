import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
      </div>
    );
  }
}

// const mapStateToProps = ({ wallet }) => ({
//   moedas, wallet.currencies,
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

export default Wallet;
