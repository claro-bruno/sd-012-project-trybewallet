import React from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';
import ExpenseForm from './ExpenseForm';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
    //   valueEntry: '0',
    //   currenty: [],
    //   method: '',
    //   tag: '',
    //   description: '',
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { emailFromGlobalState } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">
            {`Email: ${emailFromGlobalState}`}
          </p>
          <p data-testid="total-field">
            0
          </p>
          <p data-testid="header-currency-field">
            BRL
          </p>
        </header>

        <ExpenseForm onChange={ this.handleChange } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailFromGlobalState: state.user.email,
});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  emailFromGlobalState: string.isRequired,
};
