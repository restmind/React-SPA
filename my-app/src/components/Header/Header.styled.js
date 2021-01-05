import styled from 'styled-components';

export const StyledHeader = styled.div`
  position: relative;
  background-color: #1A1C2E;
  color: #F9F9FB;
`;  

export const HeaderLogo = styled.div`
  height: 52px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
`;  

export const HeaderNavigation = styled.ul`
  height: 50px;
  display: flex;
  justify-content: center;
  list-style-type: none;
  font-weight: 200;
  background: none;
  > li{
  margin: 0 100px;
  color: #AFB1BD;
  }
`;  