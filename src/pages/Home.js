import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="email">
          <input
            id="email"
            data-testid="email-input"
            type="email"
          />
        </label>
        <label htmlFor="password">
          <input
            id="password"
            data-testid="password-input"
            type="password"
          />
        </label>
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Home;
