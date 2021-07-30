import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    return(
      <header>
        <img src="" alt="" />
        <div>
          <p data-testid="email-field"></p>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>  
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email
});

const mapDispatchToProps = (dispatch) => ({
  teste: () => {},
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);