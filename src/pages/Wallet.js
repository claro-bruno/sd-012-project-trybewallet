import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Form from '../components/Form';
import Header from '../components/Header';
import { fetchAPI } from '../actions/index';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: 0,
    };
  }

  componentDidMount() {
    const { submitCurrencies } = this.props;
    submitCurrencies();
  }

  render() {
    const { expenses } = this.state;
    const { user } = this.props;

    return (
      <div>
        <Header
          email={ user.email }
          expenses={ expenses }
        />
        <Form />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  submitCurrencies: () => dispatch(fetchAPI()),
});

Wallet.propTypes = {
  submitCurrencies: PropTypes.func.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
