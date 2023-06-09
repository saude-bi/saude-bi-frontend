import React from 'react';
import { PaperProps, Box, Chip, Group } from '@mantine/core';
import { ContentCard } from '@/components/Common/ContentCard/ContentCard';

export const FilterSelector: React.FC<PaperProps> = (props) => {
  return (
    <ContentCard>
      <Box
        sx={(theme) => ({
          textAlign: 'center',
        })}
      >
        <p>Filtrar por </p>
        <Chip.Group>
          <Group position="center">
            <Chip defaultChecked color="teal" radius="md">
              teste 1
            </Chip>
            <Chip defaultChecked color="teal" radius="md">
              teste 2
            </Chip>
            <Chip defaultChecked color="teal" radius="md">
              teste 3
            </Chip>
          </Group>
        </Chip.Group>
      </Box>
    </ContentCard>
  );
};
