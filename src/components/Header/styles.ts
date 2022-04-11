import styled, { keyframes } from 'styled-components';

export const slideIn = keyframes`
  from {
    width: 0%;
    height: 3px;

  }
  to {
  
    width: 30%;
    height: 3px;
  }
  `;

export const Container = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
  }
`;

export const NavLeft = styled.nav`
  
`;

export const NavRight = styled.nav`
  
`;

export const NavCenter = styled.nav`
  
`;

export const Link = styled.a`
  display: block;
  padding: 60px 80px;

  color: #FFFFFF;
  font-size: 24px;
  position: relative;

  &:hover {
      &::after {
      content: " ";
      width:30%;
      height: 3px;
      background: #FFFFFF;
      position: absolute;
      animation: slideIn;
      top: 30px;
      left: 40px
    }
  }

`;

