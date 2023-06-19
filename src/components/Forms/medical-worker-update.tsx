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
} from '@mantine/core';
import { z } from 'zod';
import { GenericForm } from '@/components/Common/Layout/FormLayout';
import { IMaskInput } from 'react-imask';
import { validateCNS, validateCPF } from '@/utils/validation';
import { useEffect, useState } from 'react';
import { useFindAllUsersQuery } from '@/store/user';
import { useDebouncedState, useDisclosure } from '@mantine/hooks';
import { WorkRelation } from '@/types/medical-worker';

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

type Props<T> = {
  disabled: boolean;
  form: GenericForm<T>;
};

export const MedicalWorkerUpdateInputs = <T,>({ disabled = false, form }: Props<T>) => {
  return (
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

      <Switch
        label="Acesso ao sistema?"
        {...form.getInputProps('user.hasAccess')}
      />

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
            <Anchor size="xs" color="dimmed" sx={{ lineHeight: 1 }}>
              + 21 other services
            </Anchor>
          </Group>
          <SimpleGrid cols={3} mt="md">
          {form.getInputProps('workRelations').value?.map((value: WorkRelation) => (
            <>
              <div>{value.occupation.name}</div>
              <div>{value.establishment.name}</div>
            </>
          ))}
          </SimpleGrid>
        </Card>
        </>
      )}
    </Stack>
  );
};
