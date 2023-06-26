import {
  TextInput,
  InputBase,
  Stack,
  Radio,
  Group,
  Switch,
  Card,
  Anchor,
  Text,
  SimpleGrid,
  createStyles,
  rem,
} from '@mantine/core';
import { z } from 'zod';
import { GenericForm } from '@/components/Common/Layout/FormLayout';
import { IMaskInput } from 'react-imask';
import { validateCNS, validateCPF } from '@/utils/validation';
import { useEffect } from 'react';
import { WorkRelation } from '@/types/medical-worker';
import { OccupationCard } from '../Common/ContentCard/OccupationCard';
import { WorkRelationDrawer } from '@/app/(root)/admin/medical-worker/(crud)/_components/WorkRelationDrawer';
import { useParams } from 'next/navigation';
import { useRemoveWorkRelationMutation } from '@/store/work-relation';
import { useRouter } from 'next/navigation';
import { useDisclosure } from '@mantine/hooks';

export const MedicalWorkerSchema = z.object({
  name: z
    .string({
      required_error: 'Campo nome da categoria é obrigatório',
    })
    .nonempty({
      message: 'Campo nome da categoria é obrigatório',
    }),
  user: z
    .object({
      username: z
        .string({
          required_error: 'Campo nome da usuário é obrigatório',
        })
        .nonempty({
          message: 'Campo nome da usuário é obrigatório',
        })
        .min(4, { message: 'O nome de usuário informado é muito curto' }),
      password: z
        .string({
          required_error: 'Campo senha é obrigatório',
        })
        .nonempty({
          message: 'Campo senha é obrigatório',
        }),
      confirmPassword: z
        .string({
          required_error: 'Campo senha é obrigatório',
        })
        .nonempty({
          message: 'Campo senha é obrigatório',
        }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'As senhas informadas não coincidem',
      path: ['confirmPassword'],
    }),
  gender: z.enum(['Female', 'Male'], {
    errorMap: (issue, _ctx) => {
      switch (issue.code) {
        case 'invalid_type':
          return { message: 'Campo Sexo é obrigatório' };
        case 'invalid_enum_value':
          return { message: 'Campo Sexo é obrigatório' };
        default:
          return { message: 'Campo Sexo é obrigatório' };
      }
    },
  }),
  cns: z
    .string({
      required_error: 'Campo CNS é obrigatório',
    })
    .refine(validateCNS, {
      message: 'CNS inválido',
    }),
  cpf: z
    .string({
      required_error: 'Campo CPF é obrigatório',
    })
    .refine(validateCPF, {
      message: 'CPF inválido',
    }),
});

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: theme.radius.md,
    height: rem(90),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: theme.shadows.md,
      transform: 'scale(1.05)',
    },
  },
}));

type Props<T> = {
  disabled: boolean;
  form: GenericForm<T>;
};

export const MedicalWorkerUpdateInputs = <T,>({ disabled = false, form }: Props<T>) => {
  const router = useRouter();
  const [remove, isSuccess] = useRemoveWorkRelationMutation();

  const { slug } = useParams();
  const id = parseInt(slug as string, 10);

  const { classes, theme } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);

  const onDelete = (idItem: number) => {
    remove({ idDomain: id, idChild: idItem });
  };

  useEffect(() => {
    if (isSuccess) {
      router.refresh();
    }
  }, [isSuccess]);

  return (
    <>
      <WorkRelationDrawer workerId={id} opened={opened} close={close} />

      <Stack>
        <TextInput
          required
          withAsterisk
          label="Nome do Profissional"
          placeholder="Nome do Profissional"
          {...form.getInputProps('name')}
          disabled={disabled}
        />

        <Stack spacing={2}>
          <Radio.Group label="Sexo" {...form.getInputProps('gender')} withAsterisk>
            <Group mt="xs">
              <Radio value="Female" label="Feminino" disabled={disabled} />
              <Radio value="Male" label="Masculino" disabled={disabled} />
            </Group>
          </Radio.Group>
        </Stack>

        <InputBase
          component={IMaskInput}
          mask="000.000.000-00"
          withAsterisk
          label="CPF"
          placeholder="CPF do Profissional"
          {...form.getInputProps('cpf')}
          disabled={disabled}
        />

        <InputBase
          component={IMaskInput}
          mask="000000000000000"
          withAsterisk
          label="Cartão SUS"
          placeholder="CNS do Profissional"
          {...form.getInputProps('cns')}
          disabled={disabled}
        />

        <Switch label="Acesso ao sistema?" {...form.getInputProps('user.hasAccess')} />

        {form.getInputProps('user.username') && (
          <>
            <TextInput
              required
              withAsterisk
              label="Usuário"
              placeholder="Usuário de acesso ao sistema"
              {...form.getInputProps('user.username')}
              disabled={disabled}
            />
          </>
        )}

        {form.getInputProps('workRelations') && (
          <>
            <Card withBorder radius="md" className={classes.card}>
              <Group position="apart">
                <Text className={classes.title}>Services</Text>
                <Anchor onClick={open} size="xs" color="dimmed" sx={{ lineHeight: 1 }}>
                  + 21 other services
                </Anchor>
              </Group>
              <SimpleGrid
                cols={3}
                breakpoints={[
                  { maxWidth: 'md', cols: 2 },
                  { maxWidth: 'xs', cols: 1 },
                ]}
              >
                {form.getInputProps('workRelations').value?.map((value: WorkRelation) => (
                  <OccupationCard
                    idItem={value.id}
                    title={value.occupation.name}
                    value={value.establishment.name}
                    icon="trash"
                    onDelete={onDelete}
                    key={value.id}
                  />
                ))}
              </SimpleGrid>
              <SimpleGrid cols={3} mt="md"></SimpleGrid>
            </Card>
          </>
        )}
      </Stack>
    </>
  );
};
