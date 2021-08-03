import styled, { keyframes } from 'styled-components';

const blinkLogin = keyframes`0% {
    opacity: 0;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
`;

const FormLogin = styled.form`align-items: center;
  animation: ${blinkLogin} ease-in-out 2s;
  background-color: ${({ darkmode }) => (darkmode ? 'rgb(51, 51, 51)' : 'white')};
  display: flex;
  height: 100%;
  justify-content: center;
  transition: 2s;
  width: 100%;
`;

export default FormLogin;
