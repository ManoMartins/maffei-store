import HeroSection from 'components/UI/organisms/HeroSection';
import GameList from 'components/UI/organisms/GameList';
import Desktop from 'layout/desktop';

export default function Home() {
  return (
    <Desktop>
      <HeroSection />

      <GameList />
    </Desktop>
  );
}
