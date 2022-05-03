import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  margin-left: 1.25rem;

  &::before {
    left: 0;
    content: "";
    height: 2rem;
    width: 0.5rem;
    position: absolute;
    background: ${({ theme }) => theme.colors.purple[500]};
  }
`;