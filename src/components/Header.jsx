import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const imgPath = 'https://www.abcdacomunicacao.com.br/wp-content/uploads/Trybe_logo-baixa.png';
    const { userStateFromRedux } = this.props;
    const { email } = userStateFromRedux;
    const despesas = 0;

    return (
      <header>
        <div className="headerLeftDiv">
          <img src={ imgPath } alt="trybeLogo" className="headerImg" />
        </div>
        <div className="headerRightDiv">
          <div data-testid="email-field">
            { email }
          </div>
          <div data-testid="total-field">
            <p data-testid="header-currency-field">
              { `Total de despesas: ${despesas} BRL` }
            </p>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userStateFromRedux: state.user,
});

Header.propTypes = {
  userStateFromRedux: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps, null)(Header);
