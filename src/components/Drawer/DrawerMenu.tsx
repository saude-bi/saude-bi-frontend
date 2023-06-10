import {
  ActionIcon,
  Divider,
  Group,
  HoverCard,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
  createStyles,
  rem,
} from '@mantine/core';
import Link from 'next/link';
import { Icon } from '@tabler/icons-react';

export interface MenuItem {
  name: string;
  description?: string;
  uri: string;
  icon: Icon;
}

export interface Menu extends MenuItem {
  submenu?: MenuItem[];
}

type Props = {
  menu: Menu;
};

const useStyles = createStyles((theme) => ({
  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    }),

    '&:active': theme.activeStyles,
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));

export const DrawerMenu: React.FC<Props> = ({ menu }) => {
  const { classes, theme } = useStyles();

  const submenus = (menu: MenuItem[]) =>
    menu.map((item) => (
      <Link href={item.uri}>
        <UnstyledButton className={classes.subLink} key={item.name}>
          <Group noWrap align="center">
            <ThemeIcon size={34} variant="default" radius="md">
              <item.icon size={rem(22)} color={theme.fn.primaryColor()} />
            </ThemeIcon>
            <div>
              <Text size="sm" fw={500}>
                {item.name}
              </Text>
              <Text size="xs" color="dimmed">
                {item.description}
              </Text>
            </div>
          </Group>
        </UnstyledButton>
      </Link>
    ));

  return menu.submenu?.length ? (
    <HoverCard width={300} position="right-start" radius="md" shadow="md" withinPortal>
      <HoverCard.Target>
        <ActionIcon color="indigo.4" variant="filled" size={48}>
          <menu.icon size="32px" />
        </ActionIcon>
      </HoverCard.Target>

      <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
        <Group position="apart" px="md">
          <Text fw={500}>{menu.name}</Text>
        </Group>

        <Divider my="sm" mx="-md" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

        <SimpleGrid cols={1} spacing={0}>
          {submenus(menu.submenu)}
        </SimpleGrid>
      </HoverCard.Dropdown>
    </HoverCard>
  ) : (
    <Link href={menu.uri}>
      <ActionIcon color="indigo.4" variant="filled" size={48}>
        <menu.icon size="32px" />
      </ActionIcon>
    </Link>
  );
};
