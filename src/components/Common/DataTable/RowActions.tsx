import { ActionIcon, Group } from '@mantine/core';
import { IconEraser, IconEye, IconPencil } from '@tabler/icons-react';

type Props = {
  id: number;
  onRemove?: (id: number) => void;
};

export const RowActions: React.FC<Props> = ({ id, onRemove }) => {
  return (
    <Group spacing="sm" noWrap>
      <ActionIcon color="green.6" variant="filled">
        <IconEye />
      </ActionIcon>

      <ActionIcon color="blue.6" variant="filled">
        <IconPencil />
      </ActionIcon>

      {onRemove && (
        <ActionIcon color="red.6" variant="filled" onClick={() => onRemove(id)}>
          <IconEraser />
        </ActionIcon>
      )}
    </Group>
  );
};
