import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  flex: 1;
  max-width: 90.5rem;
  padding-top: 2.9rem;

  @media (max-width: 768px) {
    padding: 2.2rem 2.8rem 2.2rem;
    width: 100%;
  }
`;

export const Navbar = styled.nav`
  width: 22.8rem;
  height: 100%;
  background: #059d42;
  margin-right: 12.7rem;
  display: flex;
  flex-direction: column;
  padding: 2.2rem 2.9rem;
  position: relative;

  button.responsive {
    display: none;
    position: absolute;
    top: 1.4rem;
    left: 2.2rem;
    font-size: 3.2rem;
    margin: 0;
    padding: 0;
    background: transparent;
    border: 0;
    color: #fff;
  }

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

  @media (max-width: 1024px) {
    margin-right: 2rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 6rem;
    padding: 0;
    display: block;
    margin-right: 0;

    .navigation {
      /* display: none; */
      position: absolute;
      top: -3rem;
      right: ${(props) => (props.open ? 0 : '-100%')};
      width: 75%;
      max-width: 29rem;
      background: #468e40;
      height: 100vh;
      z-index: 100;
      padding: 2rem;
      transition: 0.3s;
    }

    button.responsive {
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

  @media (max-width: 768px) {
    width: 9.3rem;
    height: 4.2rem;
    font-size: 1.4rem;
    margin: 1rem auto;
    border-radius: 1.7rem;
  }
`;
