import { Wrap } from '@chakra-ui/react';
import DetailItem from 'components/UI/molecules/DetailItem';

export default function DetailsList() {
  return (
    <Wrap spacingY="8">
      <DetailItem title="Desenvolvedora" label="FromSoftware Inc." />
      <DetailItem title="Desenvolvedora" label="FromSoftware Inc." />
      <DetailItem title="Desenvolvedora" label="FromSoftware Inc." />
      <DetailItem title="Desenvolvedora" label="FromSoftware Inc." />
      <DetailItem title="Desenvolvedora" label="FromSoftware Inc." />
      <DetailItem title="Desenvolvedora" label="FromSoftware Inc." />
    </Wrap>
  );
}
