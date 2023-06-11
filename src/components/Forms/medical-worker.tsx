import { TextInput, InputBase, Stack, Radio, Group } from '@mantine/core';
import { z } from 'zod';
import { GenericForm } from '@/components/Common/Layout/FormLayout';
import { IMaskInput } from 'react-imask';
import { validateCNS, validateCPF } from '@/utils/validation';

export const MedicalWorkerSchema = z.object({
  name: z
    .string({
      required_error: 'Campo nome da categoria é obrigatório',
    })
    .min(4, { message: 'O nome da categoria informado é muito curto' }),
  user: z
    .string({
      required_error: 'Campo nome da usuário é obrigatório',
    })
    .min(4, { message: 'O nome de usuário informado é muito curto' }),
  gender: z.enum(['F', 'M'], {
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

export const MedicalWorkerInputs = <T,>({ disabled = false, form }: Props<T>) => {
  return (
    <Stack>
      <TextInput
        required
        withAsterisk
        label="Usuário"
        placeholder="Selecione um usuário"
        {...form.getInputProps('user')}
        disabled={disabled}
      />

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
            <Radio value="F" label="Feminino" />
            <Radio value="M" label="Masculino" />
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
    </Stack>
  );
};
