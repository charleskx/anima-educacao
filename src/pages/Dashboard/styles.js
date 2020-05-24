import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  div + div {
    margin-top: 3.2rem;
  }
`;

export const Header = styled.h1`
  font-size: 2.8rem;
  font-weight: 900;
  margin-bottom: 6.6rem;
  color: rgba(0, 0, 0, 0.7);
`;
