import styled from 'styled-components';

const HeaderWalletStyled = styled.header.attrs(() => ({
  className: 'header-wallet',
}))`background-color: ${({ darkmode }) => (darkmode ? 'rgb(51, 51, 51)' : 'white')};
`;

export default HeaderWalletStyled;
