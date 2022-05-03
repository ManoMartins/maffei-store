import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 2rem;
  background: ${({ theme }) => theme.colors.black[400]};
`;

export const Content = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    * + * {
      margin-left: 2rem;
    }
  }
`;
