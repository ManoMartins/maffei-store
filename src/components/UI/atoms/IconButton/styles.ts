import styled from 'styled-components';

export const Container = styled.button`
  border: none;
  padding: 0.5rem;
  border-radius: 0.5rem;

  background: none;

  &:hover {
    background: ${({ theme }) => theme.colors.black[100]};
  }
`;

export const Content = styled.div`

`;