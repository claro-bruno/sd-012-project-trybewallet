import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { emailFromGlobalState } = this.props;
    return (
      <header>
        <h3 data-testid="email-field">
          {`Email: ${emailFromGlobalState}`}
        </h3>
        <label htmlFor="despesa">
          Despesa:
          <input
            data-testid="total-field"
            name="despesa"
            value="0"
          />
        </label>
        <div data-testid="header-currency-field">BRL</div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  emailFromGlobalState: state.user.email,
});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = ({
  emailFromGlobalState: func.isRequired,
});
