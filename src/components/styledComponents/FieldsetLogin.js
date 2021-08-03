import styled, { keyframes } from 'styled-components';

const expand = keyframes`0% {
    height: 15vw;
    width: 15vw;
  }

  100% {
    height: 25vw;
    width: 25vw;
  }
`;

const FieldsetLogin = styled.fieldset`align-items: center;
  animation: ${expand} ease-in-out 2s;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 4px 6px ${({ darkmode }) => (darkmode ? 'rgb(38, 38, 38)' : 'silver')};
  display: flex;
  flex-direction: column;
  height: 25vw;
  justify-content: space-evenly;
  width: 25vw;
`;

export default FieldsetLogin;
