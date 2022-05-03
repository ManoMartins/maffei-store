import Link from 'next/link';
import styled, { css } from 'styled-components';

export enum LinkVariant {
  solid = 'solid',
  ghost = 'ghost',
}

export interface ContentProps {
  variant: keyof typeof LinkVariant;
}

export const Container = styled(Link)`
`;

const variant = {
  solid: css`
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    background: ${({ theme }) => theme.colors.purple[500]};

    &:hover {
      filter: brightness(0.8);
    }
  `,
  ghost: css`
    &:hover { 
      color: ${({ theme }) => theme.colors.purple[400]};
    }
  `,
}

export const Content  = styled.a<ContentProps>`
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.3s ease;
  font-weight: 500;

  font-size: 1rem;

  ${(props) => variant[props.variant]};
`;
