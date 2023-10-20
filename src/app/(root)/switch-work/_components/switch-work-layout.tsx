'use client';

import { Stack, Text } from '@mantine/core';
import { ContentCard } from '@/components/Common/ContentCard/ContentCard';
import { FilterSelector } from '@/components/FilterSelector/FilterSelector';
import { Directorship } from '@/types/directorship';

type Props = {
  children: React.ReactNode;
  directorships: Directorship[];
};

export const SwitchWorkLayout: React.FC<Props> = ({ children, directorships }) => (
  <Stack>
    <ContentCard>
      <Stack align="center" justify="center">
        <Text>Filtrar por Diretoria:</Text>
        <FilterSelector
          options={directorships.map((directorship) => directorship.acronym)}
          setSelectedOption={() => {}}
        />
      </Stack>
    </ContentCard>
    <Stack>{children}</Stack>
  </Stack>
);
