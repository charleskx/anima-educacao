import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  width: 100%;
  height: 19.6rem;
  padding: 2.1rem 2.4rem;
  position: relative;
  display: flex;
`;

export const Notification = styled.div`
  width: 26.7rem;
  height: 3.8rem;
  color: #fff;
  font-weight: 700;
  display: flex;
  align-items: center;
  padding: 0 1.4rem;
  background: ${(props) => (props.color === 0 ? '#e14646' : '#059d42')};
  font-size: 1.6rem;
  position: absolute;
  right: -2.6rem;
  top: -2.4rem;

  svg {
    font-size: 2.3rem;
    margin-right: 1.2rem;
  }
`;

export const Icon = styled.div`
  color: #059d42;
  font-size: 4.2rem;
  margin-right: 2.4rem;
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.6rem;
    color: #059d42;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p {
    color: #63666a;
    margin-bottom: 2.4rem;
  }

  .percentage {
    flex: 1;

    p {
      margin-bottom: 0.5rem;
      padding: 0;
      font-size: 0.9rem;
      color: #778489;
      text-align: right;
      position: relative;
    }
  }
`;

export const Actions = styled.div`
  margin: 0;
  padding: 0;

  button {
    display: flex;
    color: #059d42;
    border: 0;
    margin: 0;
    padding: 0;
    align-items: center;
    background: transparent;

    &:disabled {
      cursor: not-allowed;
    }

    p {
      margin: 0;
      padding: 0;
      color: #059d42;
    }

    svg {
      font-size: 2.3rem;
      margin-right: 1rem;
      color: #059d42;
    }
  }
`;

export const Percentage = styled.div`
  width: 100%;
  height: 1.6rem;
  background: #e9e9e9;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  position: relative;

  ::before {
    position: absolute;
    content: '';
    height: 1.6rem;
    width: ${(props) => props.width || 0}%;
    background: #059d42;
    border-radius: 1rem;
    left: 0;
  }

  ::after {
    position: absolute;
    content: ${(props) => JSON.stringify(props.content) || 'R$0,00'};
    height: 1.6rem;
    z-index: 9;
    color: rgba(0, 0, 0, 0.7);
    font-size: 0.9rem;
    top: 0;
    left: ${(props) => (props.width ? `calc(${props.width}% - 5rem)` : '1rem')};
    display: flex;
    align-items: center;
  }
`;
