import React from 'react';
import { Stack } from '@mantine/core';
import { User } from '@/types/user';

type Props = {
  user: User;
};

export const UserProfile: React.FC<Props> = ({ user }) => {
  return <Stack bg="red" h="50px" w="50px"></Stack>;
};
