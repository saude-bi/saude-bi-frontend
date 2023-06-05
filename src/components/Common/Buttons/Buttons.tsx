import React from 'react';
import { Button, ButtonProps } from '@mantine/core';
import { IconArrowLeft, IconDeviceFloppy } from '@tabler/icons-react';

export const ButtonBack: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button variant="outline" color="primary" leftIcon={<IconArrowLeft size="1rem" />} {...props}>
        {children || 'Voltar'}
    </Button>
  );
};


export const ButtonSave: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
      <Button variant="filled" color="green.6" leftIcon={<IconDeviceFloppy size="1rem" />} {...props}>
          {children || 'Salvar'}
      </Button>
    );
};