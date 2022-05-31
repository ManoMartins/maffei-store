import Home from 'components/UI/templates/Home';
import useFetch from 'hooks/useFetch';
import { IStoreProduct } from 'types/IStoreProduct';

export default function HomePage() {
  const games = useFetch<IStoreProduct[]>({ url: 'store-product' });

  return <Home games={games.response} />;
}
