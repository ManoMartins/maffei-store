import HeroSection from 'components/UI/organisms/HeroSection';
import GameList from 'components/UI/organisms/GameList';
import Desktop from 'layout/desktop';

import { IGame } from 'types/IGame';

interface IHomeProps {
  games?: IGame[];
}

export default function Home({ games }: IHomeProps) {
  return (
    <Desktop>
      <HeroSection games={games} />

      <GameList
        title="Lançamentos"
        gameBanner={games && games[0]}
        games={games}
      />
    </Desktop>
  );
}
