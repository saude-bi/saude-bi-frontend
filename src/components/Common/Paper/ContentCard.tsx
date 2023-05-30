
import React from 'react';
import { Paper } from '@mantine/core';
type Props =  {
  children: React.ReactNode;
}


export const ContentCard : React.FC<Props> = ({children}) => {
 

  return (
    <Paper p="xl" radius="lg"  shadow='sm'>
      {children}
    </Paper>
  );
};

