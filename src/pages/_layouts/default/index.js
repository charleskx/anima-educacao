import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Wrapper, Container, Navbar, Logo } from './styles';

function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Navbar>
        <Logo>Logotipo</Logo>

        <ul className="navigation">
          <li>
            <Link to="/">Link</Link>
          </li>
          <li>
            <Link to="/">Link</Link>
          </li>
          <li>
            <Link to="/">Link</Link>
          </li>
          <li>
            <Link to="/">Link</Link>
          </li>
          <li>
            <Link to="/">Link</Link>
          </li>

          <li>
            <span>Submenu</span>
            <ul>
              <li>
                <Link to="/">Link</Link>
              </li>
              <li>
                <Link to="/">Link</Link>
              </li>
              <li>
                <Link to="/">Link</Link>
              </li>
              <li>
                <Link to="/">Link</Link>
              </li>
            </ul>
          </li>

          <li>
            <span>Submenu</span>
            <ul>
              <li>
                <Link to="/">Link</Link>
              </li>
              <li>
                <Link to="/">Link</Link>
              </li>
              <li>
                <Link to="/">Link</Link>
              </li>
              <li>
                <Link to="/">Link</Link>
              </li>
            </ul>
          </li>
        </ul>
      </Navbar>
      <Container>{children}</Container>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DefaultLayout;
