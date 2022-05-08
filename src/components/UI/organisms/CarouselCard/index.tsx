import { Box, Container } from '@mui/material';
import { SectionTitle } from 'atoms/SectionTitle';
import { SectionCardList } from 'components/UI/molecules/SectionCardList';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

export const CarouselCard = () => {
  return (
    <Container>
      <SectionTitle />

      <Box mt={5}>
      <Swiper>
        <SwiperSlide>
          <SectionCardList />
        </SwiperSlide>

        <SwiperSlide>
          <SectionCardList />
        </SwiperSlide>
      </Swiper>
      </Box>
    </Container>
  );
};
