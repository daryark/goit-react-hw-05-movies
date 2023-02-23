import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import {
  Container,
  List,
  Section,
  StyledNavLink,
} from 'components/App/App.styled';
import Loader from 'components/Loader/Loader';

export default function Layout() {
  return (
    <>
      <Container>
        <Section as="nav">
          <List>
            <li>
              <StyledNavLink to="/">Home</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/movies">Movies</StyledNavLink>
            </li>
          </List>
        </Section>
      </Container>
      <Container as="main">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}
