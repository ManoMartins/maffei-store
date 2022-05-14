import {
  Tab,
  Tabs,
  Stack,
  Heading,
  TabList,
  TabPanel,
  TabPanels,
} from '@chakra-ui/react';
import DetailItem from 'components/UI/molecules/DetailItem';

export default function SystemRequirements() {
  return (
    <Tabs mt="14">
      <TabList borderWidth="0">
        <Tab
          fontSize="xl"
          fontWeight="bold"
          _selected={{
            borderBottomWidth: '1',
            borderColor: 'primary.700',
          }}
        >
          Windows
        </Tab>
        <Tab
          fontSize="xl"
          fontWeight="bold"
          _selected={{
            borderBottomWidth: '1',
            borderColor: 'primary.700',
          }}
        >
          Mac OS
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Stack direction="row" spacing="40">
            <Stack spacing="4">
              <Heading fontWeight="bold" fontSize="xl">
                Minimo
              </Heading>

              <DetailItem title="Sistema" label="Windows 11" />
              <DetailItem title="Processador" label="I7" />
              <DetailItem title="CPU" label="RTX 2060" />
            </Stack>

            <Stack spacing="4">
              <Heading fontWeight="bold" fontSize="xl">
                Recomendado
              </Heading>

              <DetailItem title="Sistema" label="Windows 11" />
              <DetailItem title="Processador" label="I9" />
              <DetailItem title="CPU" label="RTX 3090" />
            </Stack>
          </Stack>
        </TabPanel>

        <TabPanel>
          <Stack direction="row" spacing="40">
            <Stack spacing="4">
              <Heading fontWeight="bold" fontSize="xl">
                Minimo
              </Heading>

              <DetailItem title="Sistema" label="Windows 11" />
              <DetailItem title="Processador" label="I7" />
              <DetailItem title="CPU" label="RTX 2060" />
            </Stack>

            <Stack spacing="4">
              <Heading fontWeight="bold" fontSize="xl">
                Recomendado
              </Heading>

              <DetailItem title="Sistema" label="Windows 11" />
              <DetailItem title="Processador" label="I9" />
              <DetailItem title="CPU" label="RTX 3090" />
            </Stack>
          </Stack>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
