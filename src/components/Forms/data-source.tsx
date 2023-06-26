import { Box, TextInput } from '@mantine/core';
import { z } from 'zod';
import { GenericForm } from '@/components/Common/Layout/FormLayout';

export const DataSourceSchema = z.object({
  name: z.string({
    required_error: 'Campo Nome e Obrigatorio',
  }).nonempty({
    message: 'Campo Nome é obrigatório',
  }),
  url: z.string({
    required_error: 'Campo Url e Obrigatorio',
  }).url({
    message: 'Campo URL precisa ser valido',
  }),
  secret: z.string({
    required_error: 'Campo Codigo e Obrigatorio',
  }).nonempty({
    message: 'Campo Codigo é obrigatório',
  }),
});

type Props<T> = {
  disabled: boolean;
  form: GenericForm<T>;
};

export const DataSourceInputs = <T,>({ disabled = false, form }: Props<T>) => (
    <Box>
      <TextInput
        withAsterisk
        label="Nome"
        placeholder="Nome"
        {...form.getInputProps('name')}
        disabled={disabled}
      />
      <TextInput
        withAsterisk
        label="URL"
        placeholder="URL"
        {...form.getInputProps('url')}
        disabled={disabled}
      />
      <TextInput
        withAsterisk
        label="Codigo"
        placeholder="Codigo"
        type="password"
        {...form.getInputProps('secret')}
        disabled={disabled}
      />
    </Box>
  );
