import styled, { css } from 'styled-components';

export enum ButtonVariant {
  solid = 'solid',
  ghost = 'ghost',
}

export type ContainerProps = {
  variant: keyof typeof ButtonVariant;
}

const variant = {
  solid: css`
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.purple[500]};

    &:hover {
      background: ${({ theme }) => theme.colors.purple[600]};
    }
  `,

  ghost: css`
    color: ${({ theme }) => theme.colors.purple[500]};
    background: ${({ theme }) => theme.colors.white};

    &:hover {
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.purple[600]};
    }
  `,
}

export const Container = styled.button<ContainerProps>`
  height: 2.5rem;
  max-height: 2.5rem;
  width: 12.5rem;

  border: none;
  border-radius: 0.5rem;

  transition: background 0.3s, color 0.3s;

  font-weight: 500;
  
  cursor: pointer;
  
  ${(props) =>  variant[props.variant]};
`;
