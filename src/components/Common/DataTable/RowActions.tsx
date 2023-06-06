import { ActionIcon, Group } from '@mantine/core';
import { IconEraser, IconEye, IconPencil } from '@tabler/icons-react';
import Link from 'next/link';

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
        <Link href={previewUrl}>
          <ActionIcon color="green.6" variant="filled">
            <IconEye />
          </ActionIcon>
        </Link>
      )}

      {updateUrl && (
        <Link href={updateUrl}>
          <ActionIcon color="blue.6" variant="filled">
            <IconPencil />
          </ActionIcon>
        </Link>
      )}

      {onRemove && (
        <ActionIcon color="red.6" variant="filled" onClick={() => onRemove(id)}>
          <IconEraser />
        </ActionIcon>
      )}
    </Group>
  );
};
