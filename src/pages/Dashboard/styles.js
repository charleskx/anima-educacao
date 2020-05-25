import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.h1`
  font-size: 2.8rem;
  font-weight: 900;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 6.6rem;
`;

export const Content = styled.div`
  width: 100%;
  height: 0;
  flex: 1;
  overflow-y: auto;
  padding-right: 3.6rem;
  padding-top: 2.4rem;

  > div:not(:last-child) {
    margin-bottom: 4.6rem;
  }
`;
