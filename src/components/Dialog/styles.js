import styled from 'styled-components';

export const Container = styled.div`
  width: 60rem;
  height: 39.1rem;
  background: #fff;
  position: absolute;
  z-index: 99;
  top: ${(props) => (props.open ? 'calc(50% - 20rem)' : '200%')};
  left: calc(50% - 30rem);
  transition: 0.3s;
  display: flex;
  flex-direction: column;

  .actions {
    flex: 1;
    align-items: center;
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0 6rem;

    button {
      width: 21.2rem;
      height: 9.6rem;
      border: 0;
      background: #d4e4db;
      margin: 0 auto;
      color: #059d42;
      font-weight: 900;
      font-size: 2.8rem;

      &:disabled {
        background: rgba(212, 228, 219, 0.4);
        cursor: not-allowed;
      }
    }

    @media (max-width: 560px) {
      height: 39.1rem;
      flex: 0;

      button {
        width: 16rem;
        height: 14.7rem;
        font-size: 2.6rem;
      }
    }

    @media (max-width: 451px) {
      height: 36rem;

      button {
        width: 14rem;
      }
    }

    @media (max-width: 375px) {
      height: 26rem;
      margin-bottom: 13rem;

      button {
        width: 10rem;
        height: 10rem;
        margin: auto;
      }
    }

    @media (max-width: 320px) {
      height: 20rem;
      margin-bottom: 19rem;

      button {
        width: 9rem;
        height: 9rem;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: ${(props) => (props.open ? '99' : '-1')};
  }
`;

export const Header = styled.div`
  height: 3.8rem;
  background: #059d42;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-bottom: 3.4rem;

  P {
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0;
  }

  button {
    background: transparent;
    border: 0;
    color: #fff;
  }

  svg {
    font-size: 2.5rem;
  }
`;

export const Footer = styled.div`
  height: 6.9rem;
  background: #f5f5f5;
  border-top: 0.1rem solid #d2d2d2;
`;

export const Mask = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 98;
  background: rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transition: 0.3s;
  display: ${(props) => (props.open ? 'block' : 'none')};
`;
