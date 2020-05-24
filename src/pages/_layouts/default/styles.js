import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;

export const Container = styled.div`
  flex: 1;
  max-width: 90.5rem;
  padding-top: 2.9rem;
`;

export const Navbar = styled.nav`
  width: 22.8rem;
  height: 100%;
  background: #059d42;
  margin-right: 12.7rem;
  display: flex;
  flex-direction: column;
  padding: 2.2rem 2.9rem;

  .navigation {
    margin-top: 3rem;

    li + li {
      margin-top: 0.8rem;
    }

    a {
      color: #fff;
    }

    span {
      color: #93ffe8;
      font-weight: 700;
      margin-top: 2.3rem;
      margin-bottom: 1.1rem;
      display: block;
    }
  }
`;

export const Logo = styled.div`
  background: rgba(255, 255, 255, 0.6);
  width: 100%;
  height: 8.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.8rem;
  font-weight: 900;
  color: #059d42;
  text-transform: uppercase;
  border-radius: 3.4rem;
  user-select: none;
`;
