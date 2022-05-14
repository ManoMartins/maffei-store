import Home from 'components/UI/templates/Home';
import useFetch from 'hooks/useFetch';
import { IGame } from 'types/IGame';

export default function HomePage() {
  const games = useFetch<IGame[]>('store-product');

  return <Home games={games.data} />;
}
