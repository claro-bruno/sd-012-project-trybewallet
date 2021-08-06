import React from 'react';
import EmailHeader from './EmailHeader';
import CambioHeader from './CambioHeader';
import TotalValueHeader from './TotalValueHeader';

class Header extends React.Component {
  render() {
    return (
      <header>
        <EmailHeader />
        <CambioHeader />
        <TotalValueHeader />
      </header>
    );
  }
}

export default Header;
