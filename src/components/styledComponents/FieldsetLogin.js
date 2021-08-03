import styled, { keyframes } from 'styled-components';

const expand = keyframes`0% {
    height: 200px;
    width: 200px;
  }

  100% {
    height: 280px;
    width: 280px;
  }
`;

const FieldsetLogin = styled.fieldset`align-items: center;
  animation: ${expand} ease-in-out 2s;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 4px 6px ${({ darkmode }) => (darkmode ? 'rgb(38, 38, 38)' : 'silver')};
  display: flex;
  flex-direction: column;
  height: 280px;
  justify-content: space-evenly;
  width: 280px;
`;

export default FieldsetLogin;
