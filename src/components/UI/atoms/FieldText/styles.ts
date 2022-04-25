import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.input`
  height: 2.5rem;
  padding: 0rem 0.5rem;
  border-radius: 0.5rem;
  
  border: 2px solid ${props => props.theme.colors.black[100]};
  background-color: ${props => props.theme.colors.black[100]};
  
  &:hover {
    border: 2px solid ${props => props.theme.colors.purple[500]};
  }
  
  &:focus {
    outline: 2px solid ${props => props.theme.colors.purple[500]};
  }
`;

export const Label = styled.label`
  font-weight: 500;
  margin-bottom: 0.25rem;
  color: ${props => props.theme.colors.black[500]};
`