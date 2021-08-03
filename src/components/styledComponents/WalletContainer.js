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

const WalletContainer = styled.div`animation: ${fade} ease-in-out 2s;
  background-color: ${({ darkmode }) => (darkmode ? 'rgb(51, 51, 51)' : 'white')};
  display: grid;
  grid-template-areas: 'headWallet headWallet''newExp newExp' 'mainWallet mainWallet';
  grid-template-rows: 20vh  12vh 68vh;
  transition: all 2s;
`;

export default WalletContainer;
