import { Box, TextInput } from '@mantine/core';
import { z } from 'zod';
import { GenericForm } from '@/components/Common/Layout/FormLayout';

export const DataSourceSchema = z.object({
  name: z.string({
    required_error: 'Campo nome e Obrigatorio',
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
