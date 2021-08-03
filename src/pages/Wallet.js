import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './Form';
import { fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { total } = this.state;
    const { userEmail } = this.props;

    return (
      <div>
        <header>
          <p
            data-testid="email-field"
          >
            {`Email: ${userEmail}`}
          </p>
          <p
            data-testid="total-field"
          >
            {`Despesa Total: ${total}`}
          </p>
          <p
            data-testid="header-currency-field"
          >
            BRL
          </p>
          <section>
            <Form />
          </section>
        </header>
      </div>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});
const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
