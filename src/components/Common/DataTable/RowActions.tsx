import { ActionIcon, Group } from '@mantine/core';
import { IconEraser, IconEye, IconPencil } from '@tabler/icons-react';

type Props = {
  id: number;
  previewUrl?: string;
  updateUrl?: string;
  onRemove?: (id: number) => void;
};

export const RowActions: React.FC<Props> = ({ id, previewUrl, updateUrl, onRemove }) => {
  return (
    <Group spacing="sm" noWrap>
      {previewUrl && (
        <ActionIcon color="green.6" variant="filled" component="a" href={previewUrl}>
          <IconEye />
        </ActionIcon>
      )}

      {updateUrl && (
        <ActionIcon color="blue.6" variant="filled" component="a" href={updateUrl}>
          <IconPencil />
        </ActionIcon>
      )}

      {onRemove && (
        <ActionIcon color="red.6" variant="filled" onClick={() => onRemove(id)}>
          <IconEraser />
        </ActionIcon>
      )}
    </Group>
  );
};
