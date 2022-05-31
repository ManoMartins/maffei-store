import HeroSection from 'components/UI/organisms/HeroSection';
import GameList from 'components/UI/organisms/GameList';
import Desktop from 'layout/desktop';

import { IStoreProduct } from 'types/IStoreProduct';
import { useMemo } from 'react';

interface IHomeProps {
  games?: IStoreProduct[];
}

export default function Home({ games }: IHomeProps) {
  const randomIndex = useMemo(() => {
    if (!games) return 0;

    return Math.floor(Math.random() * games.length);
  }, [games]);

  return (
    <Desktop>
      <HeroSection storeProducts={games} />

      <GameList
        title="Lançamentos"
        gameBanner={games && games[randomIndex]}
        games={games}
      />
    </Desktop>
  );
}
