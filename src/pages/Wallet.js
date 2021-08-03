import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import { fetchAPI } from '../actions/actionWallet';
import TableExpenses from '../components/TableExpenses';

class Wallet extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.getData = this.getData.bind(this);
  // }

  componentDidMount() {
    const { getData } = this.props;
    getData();
  }

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
        <section>
          <TableExpenses />
        </section>
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string,
  getData: PropTypes.func,
};

Wallet.defaultProps = {
  email: 'email@email.com',
  getData: () => {},
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currency: state.wallet.currency,
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(fetchAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
