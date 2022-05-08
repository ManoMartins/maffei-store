import { Header } from "organisms/Header";
import "swiper/css";
import { Carousel } from "organisms/Carousel";
import { ButtonGroup, Stack } from "@mui/material";
import { BigButton } from "atoms/BigButton";
import { CarouselCard } from "organisms/CarouselCard";

const GAME = {
  title: "The Witcher 3: Wild Hunt",
  price: 24,
  thumbnail: "https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg?t=1625363925",
  id: "367520",
  createdAt: new Date(),
}
export default function HomePage() {
  return (
    <div>
      <Header />

      <Carousel 
        mainBanner={GAME} 
        releasesBanner={[
          GAME,
          GAME,
          GAME,
        ]}
        discountBanner={[
          GAME,
          GAME,
          GAME,
          GAME,
          GAME,
          GAME,
        ]}
        upcomingBanner={[
          GAME,
          GAME,
          GAME,
        ]}
      />

      <CarouselCard />
    </div>
  )
}
