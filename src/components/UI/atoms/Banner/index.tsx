import { Box, BoxProps, Stack, Typography } from "@mui/material"
import { IGame } from "types/IGame"

interface IBannerProps extends BoxProps {
  game: IGame
  boxProps?: BoxProps
}

export const Banner = ({
  game,
  boxProps,
  ...rest
}: IBannerProps) => {
  return (
    <Box display="grid" gridColumn="span 1" gridRow="span 1" {...rest}>
      <Box
        sx={{
          backgroundSize: "cover",
          backgroundColor: "#fafafa",
          backgroundPosition: 'center',
          backgroundRepeat: "no-repeat",
          boxShadow: "inset 0px -40px rgba(0, 0, 0, 0.5)",

          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          transition: "all 0.2s ease-in-out",

          cursor: "pointer",
          backgroundImage: `url(${game.thumbnail})`,
          ...boxProps
        }}
      >
        <Stack direction="row" justifyContent="space-between" px={1} height={32} color="#FAFAFA">
          <Typography>
            {game.title}
          </Typography>

          <Typography>
            {game.price}
          </Typography>
        </Stack>
      </Box>
    </Box>
  )
}