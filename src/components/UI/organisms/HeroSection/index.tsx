import { Box } from '@chakra-ui/react';
import HeroSectionItem from 'components/UI/molecules/HeroSectionItem';
import { IGame } from 'types/IGame';

interface IHeroSectionProps {
  games?: IGame[];
}

export default function HeroSection({ games }: IHeroSectionProps) {
  return <Box>{games && <HeroSectionItem game={games[0]} />}</Box>;
}
