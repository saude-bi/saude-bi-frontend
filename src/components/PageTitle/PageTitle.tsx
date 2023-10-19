import React from 'react';
import { Stack, Title, Text } from '@mantine/core';

type Props = {
  title: string;
};

export const PageTitle: React.FC<Props> = ({ title }) => (
  <Stack spacing={0}>
    <Title color="black" weight="bold" size="md">
      {title}
    </Title>
    <Text color="dark.3" size="xs">
      Pagina Inicial
    </Text>
  </Stack>
);
