import { Box } from "@mui/material"
import { Banner } from "atoms/Banner"
import { Swiper, SwiperSlide } from "swiper/react"
import { IGame } from "types/IGame"

interface ICarouselProps {
  mainBanner: IGame
  releasesBanner?: [IGame, IGame, IGame]
  upcomingBanner?: [IGame, IGame, IGame]
  discountBanner?: [IGame, IGame, IGame, IGame, IGame, IGame]
}

export const Carousel = ({ 
  mainBanner, 
  discountBanner, 
  releasesBanner, 
  upcomingBanner 
}: ICarouselProps) => {
  return (
    <Swiper>
      <SwiperSlide>
        <Box display="grid" gridTemplateColumns="repeat(3, 316px)" gridTemplateRows="repeat(2, 148px)" gap={2}>
          <Banner game={mainBanner} gridRow="span 2" gridColumn="span 3" />
        </Box>
      </SwiperSlide>

      {releasesBanner && (
        <SwiperSlide>
          <Box display="grid" gridTemplateColumns="repeat(3, 316px)" gridTemplateRows="repeat(2, 148px)" gap={2}>
            {releasesBanner.map((game, index) => {
              const gridRow = index === 0 ? "span 2" : "span 1"
              const gridColumn = index === 0 ? "span 2" : "span 1"

              return (
                <Banner key={game.id} game={game} gridRow={gridRow} gridColumn={gridColumn} />
              )
            })}
          </Box>
        </SwiperSlide>
      )}

      {discountBanner && (
        <SwiperSlide>
          <Box display="grid" gridTemplateColumns="repeat(3, 316px)" gridTemplateRows="repeat(2, 148px)" gap={2}>
            {discountBanner.map((game) => {
              return (
                <Banner key={game.id} game={game} />
              )
            })}
          </Box>
        </SwiperSlide>
      )}

      {upcomingBanner && (
        <SwiperSlide>
          <Box display="grid" gridTemplateColumns="repeat(3, 316px)" gridTemplateRows="repeat(2, 148px)" gap={2}>
            {upcomingBanner.map((game, index) => {
              const gridRow = index === 2 ? '1 / 3' : 'span 1'
              const gridColumn = index === 2 ? '2 / 4' : 'span 1'

              return (
                <Banner key={game.id} game={game} gridRow={gridRow} gridColumn={gridColumn} />
              )
            })}
          </Box>
        </SwiperSlide>
      )}
    </Swiper>
  )
}
