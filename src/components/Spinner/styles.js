import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: ${(props) => (props.active ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  background: rgba(255, 255, 255, 0.5);
  transition: 0.3s;
`;

const spin = keyframes`
  to {
    transform: rotate(360deg)
  }
`;

export const Loader = styled.div`
  width: 3rem;
  height: 3rem;
  border: 0.3rem solid rgba(0, 0, 0, 0.2);
  border-left-color: #059d42;
  border-radius: 50%;
  animation: 1s ${spin} linear infinite;
`;
