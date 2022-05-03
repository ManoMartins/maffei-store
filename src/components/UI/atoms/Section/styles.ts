import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
  padding: 0 4rem;
`;

export const Cards = styled.div`
  display: flex;

  margin: 2rem auto;

  > * + * {
    margin-left: 1rem;
  }
`;