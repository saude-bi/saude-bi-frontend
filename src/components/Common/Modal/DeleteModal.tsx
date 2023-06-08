import { Text } from '@mantine/core';
import { modals } from '@mantine/modals';

type Props = {
  onCancel?: () => void;
  onConfirm?: () => void;
};

export const createDeleteModal = ({ onCancel, onConfirm }: Props) => {
  return () =>
    modals.openConfirmModal({
      title: 'Confirmação de exclusão',
      centered: true,
      withCloseButton: false,
      children: (
        <Text size="sm">
          Você tem certeza que deseja deletar este item? Esta ação não poderá ser desfeita.
        </Text>
      ),
      labels: { confirm: 'Deletar', cancel: 'Voltar' },
      confirmProps: { color: 'red' },
      onCancel,
      onConfirm,
    });
};
