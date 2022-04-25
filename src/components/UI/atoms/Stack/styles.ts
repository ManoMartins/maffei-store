import styled from 'styled-components';

type ContainerProps = {
  spacing?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  * + * {
    margin: 0 0 0 ${props => props.spacing || '5px'};
  }
`;
