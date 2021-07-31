import React from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';
import ExpenseForm from './ExpenseForm';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      valueEntry: '0',
      currenty: [],
      method: '',
      tag: '',
      description: '',
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { emailFromGlobalState } = this.props;
    return (
      <header>
        <h3 data-testid="email-field">
          {`Email: ${emailFromGlobalState}`}
        </h3>
        <label htmlFor="despesa">
          Valor
          <input
            data-testid="total-field"
            name="despesa"
            value="0"
            onChange={ this.handleChange }
          />
        </label>
        <div data-testid="header-currency-field">
          BRL
        </div>
        <ExpenseForm onChange={ this.handleChange } />
      </header>
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
