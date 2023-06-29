'use client';

import { useState } from 'react';
import { ContentCard } from '@/components/Common/ContentCard/ContentCard';
import { Stack, Text } from '@mantine/core';
import { FilterSelector } from '@/components/FilterSelector/FilterSelector';
import { useGetCurrentUserQuery } from '@/store/auth';
import { Directorship } from '@/types/directorship';

type Props = {
  children: React.ReactNode;
  directorship: Directorship[]
};

export const SwitchWorkLayout: React.FC<Props> = ({ children, directorship }) => {
  return (
    <Stack>
      <ContentCard>
        <Stack align="center" justify="center">
          <Text>Filtrar por Diretoria:</Text>
          <FilterSelector
            options={directorship.map((directorship) => directorship.acronym)}
            setSelectedOption={() => {}}
          />
        </Stack>
      </ContentCard>
      <Stack>
        {children}
      </Stack>
    </Stack>
  );
}
