import { Box } from '@chakra-ui/react';
import HeroSectionItem from 'components/UI/molecules/HeroSectionItem';
import { useMemo } from 'react';
import { IStoreProduct } from 'types/IStoreProduct';

interface IHeroSectionProps {
  storeProducts?: IStoreProduct[];
}

export default function HeroSection({ storeProducts }: IHeroSectionProps) {
  const randomIndex = useMemo(() => {
    if (!storeProducts) return 0;

    return Math.floor(Math.random() * storeProducts.length);
  }, [storeProducts]);

  return (
    <Box>
      {storeProducts && (
        <HeroSectionItem storeProduct={storeProducts[randomIndex]} />
      )}
    </Box>
  );
}
