import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <Header
          email={ email }
        />
        <hr />
        <section>
          <WalletForm />
        </section>
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string,
};

Wallet.defaultProps = {
  email: 'email@email.com',
};

const mapStateToProps = ({
  user: { email },
}) => ({
  email,
});

export default connect(mapStateToProps)(Wallet);
