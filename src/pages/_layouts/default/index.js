import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

import PropTypes from 'prop-types';

import { Wrapper, Container, Navbar, Logo } from './styles';

function DefaultLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <Navbar open={open}>
        <button
          type="button"
          className="responsive"
          onClick={() => setOpen(!open)}
        >
          <FiMenu />
        </button>

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
