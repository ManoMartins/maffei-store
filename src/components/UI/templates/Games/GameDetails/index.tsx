import { Box } from '@chakra-ui/react';
import Desktop from 'layout/desktop';
import About from './components/About';
import Details from './components/Details';
import Gallery from './components/Gallery';
import Information from './components/Information';
import SystemRequirements from './components/SystemRequirements';

export default function GameDetails() {
  return (
    <Box position="relative">
      <Box
        zIndex="-1"
        top="-16"
        width="100%"
        height="516px"
        position="absolute"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        boxShadow="inset 0 0 1rem 100rem rgba(0, 0, 0, 0.5)"
        backgroundImage="url(https://cdn.cloudflare.steamstatic.com/steam/apps/256875482/movie.184x123.jpg?t=1645743462)"
      />

      <Desktop>
        <Details />

        <Gallery />

        <About />

        <Information />

        <SystemRequirements />
      </Desktop>
    </Box>
  );
}
