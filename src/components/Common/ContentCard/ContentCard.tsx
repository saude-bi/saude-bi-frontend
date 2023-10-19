import React from 'react';
import { Paper, PaperProps } from '@mantine/core';

export const ContentCard: React.FC<PaperProps> = (props) => (
  <Paper p="xl" radius="lg" shadow="sm" bg="white" {...props} />
);
