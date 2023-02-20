import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  padding: 10px;

  color: black;
  border-bottom: 2px solid transparent;
  transform: scaleX(0);
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.1, 0),
    scale 250ms cubic-bezier(0.4, 0, 0.1, 0);

  &.active {
    border-color: green;
    color: green;
    transform: scaleX(1);
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 30px;
`;

export const Section = styled.div`
  padding: 10px 0;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;
