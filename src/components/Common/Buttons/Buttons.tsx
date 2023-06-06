import React from 'react';
import { Button, ButtonProps } from '@mantine/core';
import { PolymorphicComponentProps } from '@mantine/utils';
import { IconArrowLeft, IconDeviceFloppy, IconPencil, IconPlus, IconTrash } from '@tabler/icons-react';
import Link from 'next/link';

type BaseButtonProps<C = 'button'> = PolymorphicComponentProps<C, ButtonProps>;

export const ButtonBack: React.FC<BaseButtonProps> = ({ children, ...props }) => (
  <Button variant="outline" color="primary" leftIcon={<IconArrowLeft size="1rem" />} {...props}>
    {children || 'Voltar'}
  </Button>
);

export const ButtonSave: React.FC<BaseButtonProps> = ({ children, ...props }) => (
  <Button
    variant="filled"
    type="submit"
    color="green.6"
    leftIcon={<IconDeviceFloppy size="1rem" />}
    {...props}
  >
    {children || 'Salvar'}
  </Button>
);

export const ButtonEdit: React.FC<BaseButtonProps> = ({ children, ...props }) => (
  <Button
    variant="filled"
    type="submit"
    color="blue.6"
    leftIcon={<IconPencil size="1rem" />}
    {...props}
  >
    {children || 'Editar'}
  </Button>
);

export const ButtonDelete: React.FC<BaseButtonProps> = ({ children, ...props }) => (
  <Button
    variant="filled"
    type="submit"
    color="red.6"
    leftIcon={<IconTrash size="1rem" />}
    {...props}
  >
    {children || 'Deletar'}
  </Button>
);

export const ButtonCreate: React.FC<BaseButtonProps & { href: string }> = ({
  children,
  ...props
}) => (
  <Link href={props.href}>
    <Button color="indigo.4" leftIcon={<IconPlus size="20px" />} {...props}>
      {children}
    </Button>
  </Link>
);
