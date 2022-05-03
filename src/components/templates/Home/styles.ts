import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  height: 27.5rem;

  padding: 0 4rem;

  margin-top: 4rem;
  position: relative;

  /* color: ${({ theme }) => theme.colors.white}; */

  .swiper {
    width: 100%;
    height: 100%;
    border-radius: 0.25rem;
    background-color: ${({ theme }) => theme.colors.black[500]};
  }

  .swiper-slide {
    background-color: #fafa;
  }

  .swiper-pagination-horizontal {
    position: absolute;
    transform: rotate(90deg);
    bottom: 50%;
    /* bottom: -1.5rem; */
  }

  .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction {
    right: 0;
    left: auto;
    width: auto;
  }
`;

export const Cards = styled.div`
  display: flex;

  margin: 2rem auto;

  > * + * {
    margin-left: 1rem;
  }
`