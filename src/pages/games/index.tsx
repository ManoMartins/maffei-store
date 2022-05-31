import Games from 'components/UI/templates/Games';
import useFetch from 'hooks/useFetch';
import { IStoreProduct } from 'types/IStoreProduct';

export default function GamesPage() {
  const fetch = useFetch<IStoreProduct[]>({ url: 'store-product' });

  return <Games games={fetch.response} isLoading={fetch.loading} />;
}
