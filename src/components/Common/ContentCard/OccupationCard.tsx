import { createStyles, Group, Paper, SimpleGrid, Text, rem, ActionIcon } from '@mantine/core';
import {
  IconUserPlus,
  IconDiscount2,
  IconReceipt2,
  IconCoin,
  IconArrowUpRight,
  IconArrowDownRight,
  IconTrash,
} from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  root: {
    padding: `calc(${theme.spacing.xl} * 1.5)`,
  },

  value: {
    fontSize: rem(24),
    fontWeight: 700,
    lineHeight: 1,
  },

  diff: {
    lineHeight: 1,
    display: 'flex',
    alignItems: 'center',
  },

  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
  },

  title: {
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

const icons = {
  trash: IconTrash,
};

interface OccupationCardProps {
  idItem: number;
  title: string;
  icon: keyof typeof icons;
  value: string;
  onDelete: (id: number) => void;
}

export function OccupationCard({ idItem, title, icon, value, onDelete }: OccupationCardProps) {
  const { classes } = useStyles();
  const Icon = icons[icon];

  return (
    <Paper withBorder p="md" radius="md" key={title}>
      <Group position="apart">
        <Text size="xs" color="dimmed" className={classes.title}>
          {title}
        </Text>
        <ActionIcon color="red.4" variant="subtle" size={32} onClick={() => onDelete(idItem)}>
          <Icon className={classes.icon} size="1.4rem" stroke={1.5} />
        </ActionIcon>
      </Group>

      <Group align="flex-end" spacing="xs" mt={25}>
        <Text className={classes.value}>{value}</Text>
      </Group>
    </Paper>
  );
}
