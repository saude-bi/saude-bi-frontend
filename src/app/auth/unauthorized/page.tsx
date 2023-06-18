'use client';

import { createStyles, Title, Text, Button, Container, Group, rem } from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: rem(80),
    paddingBottom: rem(120),
    height: '100vh',
    backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(220),
    lineHeight: 1,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    color: theme.colors[theme.primaryColor][3],

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(120),
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(38),
    color: theme.white,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(32),
    },
  },

  description: {
    maxWidth: rem(540),
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    color: theme.colors[theme.primaryColor][1],
  },
}));

export default function UnauthorizedPage() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>401</div>
        <Title className={classes.title}>Sem permissão de acesso...</Title>
        <Text size="lg" align="center" className={classes.description}>
          Você não possui acesso para acessar a página desejada, verifique sua permissão de acesso
          ou entre em contato com administrador do sistema
        </Text>
        <Group position="center">
          <Link href="/">
            <Button variant="white" size="md">
              Voltar para página inicial
            </Button>
          </Link>
        </Group>
      </Container>
    </div>
  );
}
