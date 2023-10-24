import { TextInput, InputBase, Stack, Radio, Group, Switch, PasswordInput } from '@mantine/core';
import { z } from 'zod';
import { IMaskInput } from 'react-imask';
import { useEffect, useState } from 'react';
import { useDebouncedState, useDisclosure } from '@mantine/hooks';
import { GenericForm } from '@/components/Common/Layout/FormLayout';
import { validateCNS, validateCPF } from '@/utils/validation';

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
    errorMap: (issue) => {
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

export const MedicalWorkerInputs = <T,>({ disabled = false, form }: Props<T>) => {
  const [access, setAccess] = useState(false);
  // FIXME: set search state
  const [search] = useState('');
  const [visible, { toggle }] = useDisclosure(false);
  const [, setCurrentSearch] = useDebouncedState(search, 250);

  useEffect(() => {
    setCurrentSearch(search);
  }, [search]);

  // FIXME: verificar utilização desta lista
  //  const { data } = useFindAllUsersQuery(
  //    { page: 0, perPage: 1000, username: currentSearch },
  //    { pollingInterval: 30000 }
  //  );
  //
  //  const occupationCategoriesList =
  //    data?.data.map((item) => ({
  //      value: item.username,
  //      label: item.username,
  //    })) || [];

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
            <Radio value="Female" label="Feminino" />
            <Radio value="Male" label="Masculino" />
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
        onChange={(event) => setAccess(event.currentTarget.checked)}
      />

      {access === true && (
        <>
          <TextInput
            required
            withAsterisk
            label="Usuário"
            placeholder="Usuário de acesso ao sistema"
            {...form.getInputProps('user.username')}
            disabled={disabled}
          />

          <PasswordInput
            label="Senha"
            placeholder="Informe uma senha"
            {...form.getInputProps('user.password')}
            visible={visible}
            onVisibilityChange={toggle}
          />

          <PasswordInput
            label="Confirmar Senha"
            placeholder="Digite novamente a senha"
            {...form.getInputProps('user.confirmPassword')}
            visible={visible}
            onVisibilityChange={toggle}
          />
        </>
      )}
    </Stack>
  );
};
