import React from 'react';
import { modals } from '@mantine/modals';
import { Button, ButtonProps, Text } from '@mantine/core';
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

export const ButtonEdit: React.FC<BaseButtonProps & { href: string }> = ({ children, ...props }) => (
  <Link href={props.href} style={{ textDecoration: 'none' }}>
    <Button
      variant="filled"
      type="submit"
      color="blue.6"
      leftIcon={<IconPencil size="1rem" />}
      {...props}
      fullWidth
    >
      {children || 'Editar'}
    </Button>
  </Link>
);

export const ButtonDelete: React.FC<BaseButtonProps & { onDelete: () => void }> = ({ children, onDelete, ...props }) => {
  const openDeleteModal = () => modals.openConfirmModal({
      title: 'Confirmação de exclusao',
      centered: true,
      children: (
        <Text size="sm">
          Você tem certeza que deseja deletar este item? Esta ação não poderá ser desfeita.
        </Text>
      ),
      labels: { confirm: 'Sim deletar', cancel: "Não deletar" },
      confirmProps: { color: 'red' },
      onCancel: () => console.log('Cancel'),
      onConfirm: () => onDelete(),
  });

  return (
    <Button
      onClick={openDeleteModal}
      variant="filled"
      type="submit"
      color="red.6"
      leftIcon={<IconTrash size="1rem" />}
      {...props}
    >
      {children || 'Deletar'}
    </Button>
  );
};

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
