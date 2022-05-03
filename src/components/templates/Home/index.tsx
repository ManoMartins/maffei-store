import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import { Header } from "../../UI/molecules/Header";
import * as S from './styles';
import Image from "next/image";
import { Section } from "../../UI/atoms/Section";

export const Home = () => {
  return (
    <S.Container>
      <Header />

      <S.Content>
        <Swiper 
          spaceBetween={12}
          pagination={{
            clickable: true,
          }}
          autoplay
          modules={[Pagination, Autoplay]}
        >
          <SwiperSlide>
            <Image 
              layout="fill" 
              objectFit="cover" 
              alt="little nightmares"
              src="https://images.wallpapersden.com/image/download/little-nightmares-2_bGZrZWWUmZqaraWkpJRobWllrWZuZ2U.jpg" 
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image 
              layout="fill"
              objectFit="cover" 
              alt="dying light" 
              src="https://images.expothemes.com/dying-light-2-stay-human/images/dying-light-2-stay-human-windows-theme-7-hd.jpg" 
            />
          </SwiperSlide>
        </Swiper>
      </S.Content>

      <Section title="Novidades no Maffei" cards={[]} />
      <Section title="Recomendado para você" cards={[]} />
      <Section title="Tendências" cards={[]} />
    </S.Container>
  )
}