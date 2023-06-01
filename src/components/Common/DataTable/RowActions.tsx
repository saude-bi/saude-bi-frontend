import { ActionIcon, Group } from '@mantine/core';
import { IconEraser, IconEye, IconPencil } from '@tabler/icons-react';

type Props = {
  id: number;
};

export const RowActions: React.FC<Props> = ({ id }) => {
  return (
    <Group spacing="sm">
      <ActionIcon color="green.6" variant="filled">
        <IconEye />
      </ActionIcon>

      <ActionIcon color="blue.6" variant="filled">
        <IconPencil />
      </ActionIcon>

      <ActionIcon color="red.6" variant="filled">
        <IconEraser />
      </ActionIcon>
    </Group>
  );
};
