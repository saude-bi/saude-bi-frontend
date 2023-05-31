import React from 'react';
import { Paper, PaperProps } from '@mantine/core';

export const ContentCard: React.FC<PaperProps> = (props) => {
  return <Paper p="xl" radius="lg" shadow="sm" {...props} />;
};
