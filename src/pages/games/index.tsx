import Games from 'components/UI/templates/Games';
import useFetch from 'hooks/useFetch';
import { IGame } from 'types/IGame';

export default function GamesPage() {
  const fetch = useFetch<IGame[]>('store-product');

  return <Games games={fetch.data} isLoading={fetch.type === 'loading'} />;
}
