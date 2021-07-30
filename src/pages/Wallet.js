import React from 'react';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        TrybeWallet
        <form>
          <label htmlFor="email">
            email:
            <input
              data-testid="email-input"
              type="email"
              id="email"
              name=""
              // value=""
            />
          </label>
          <label htmlFor="senha">
            senha:
            <input
              data-testid="password-input"
              type="password"
              id="senha"
              name=""
              // value=""
            />
          </label>
        </form>
        <button
          type="button"
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Wallet;
