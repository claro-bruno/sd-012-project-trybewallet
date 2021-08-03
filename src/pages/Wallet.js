import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currencies: [],
      expenses: [],
    };
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <div>
          <h3 data-testid="email-field">{ email }</h3>
        </div>
        <div>
          <span data-testid="total-field">
            0
          </span>
        </div>
        <div>
          <span data-testid="header-currency-field">
            BRL
          </span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => (
  { email: state.user.email }
);

export default connect(mapStateToProps)(Wallet);
