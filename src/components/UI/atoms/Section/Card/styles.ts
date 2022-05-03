import styled from 'styled-components';
import NextImage from 'next/image'
import Link from 'next/link';

export const Container = styled(Link)`
  width: 13.5rem;
  height: 15rem;
`;

export const Content = styled.a`
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 15px 5px #000000;
  background: ${({ theme }) => theme.colors.black[400]};
`;

export const Image = styled(NextImage)``

export const Title = styled.h1`
  font-size: 1rem;
  font-weight: 500;
`

export const Platforms = styled.div`
  margin-top: 0.5rem;
  * + * {
    margin-left: 0.5rem;
  }
`

export const Details = styled.div`
  padding-left: 0.5rem;
  padding-top: 0.5rem;
  padding-right: 1rem;
  padding-bottom: 0.75rem;

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Price = styled.span`
  font-size: 1rem;
  font-weight: 700;
`

export const Footer = styled.div`
  display: flex;
  margin-top: 1rem;
  align-items: center;

  button {
    height: 2rem;
    width: 5.875rem;
  }

  * + * {
    margin-left: 1rem;
  }
`