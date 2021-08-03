import styled, { keyframes } from 'styled-components';

const fade = keyframes`0% {
    opacity: 0;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
`;

const WalletContainer = styled.div.attrs(() => ({
  className: 'wallet-container',
}))`animation: ${fade} ease-in-out 2s;
  background-color: ${({ darkmode }) => (darkmode ? 'rgb(51, 51, 51)' : 'white')};
  height: 100vh;
  transition: all 2s;
  width: 100vw;
`;

export default WalletContainer;
