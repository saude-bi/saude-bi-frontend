import React, { MouseEventHandler } from 'react';
import { Button, ButtonProps } from '@mantine/core';
import { IconArrowLeft, IconDeviceFloppy } from '@tabler/icons-react';

type Props = {
  children?: React.ReactNode,
  handleSubmit: MouseEventHandler<HTMLButtonElement>,
  props?: ButtonProps
}

export const ButtonBack: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button variant="outline" color="primary" leftIcon={<IconArrowLeft size="1rem" />} {...props}>
        {children || 'Voltar'}
    </Button>
  );
};

export const ButtonSave: React.FC<Props> = ({ children, handleSubmit, ...props }) => {
    return (
      <Button onClick={handleSubmit} variant="filled" type='submit' color="green.6" leftIcon={<IconDeviceFloppy size="1rem" />} {...props}>
          {children || 'Salvar'}
      </Button>
    );
};