import { Box, TextInput } from '@mantine/core';
import { z } from 'zod';
import { GenericForm } from '../Common/Layout/FormLayout';

export const DirectorshipSchema = z.object({
  name: z
    .string({
      required_error: 'Campo nome da diretoria é obrigatório',
    })
    .min(4, { message: 'O nome da diretoria informado é muito curto' }),
  acronym: z
    .string({
      required_error: 'Campo sigla da diretoria é obrigatório',
    })
    .min(4, { message: 'A sigla da diretoria informado é muito curto' }),
});

type Props<T> = {
  disabled: boolean;
  form: GenericForm<T>;
};

export const DirectorshipInputs = <T,>({ disabled = false, form }: Props<T>) => {
  return (
    <Box>
      <TextInput
        withAsterisk
        label="Categoria"
        placeholder="Categoria"
        {...form.getInputProps('name')}
        disabled={disabled}
      />

      <TextInput
        withAsterisk
        label="Sigla"
        placeholder="Sigla"
        {...form.getInputProps('acronym')}
        disabled={disabled}
      />
    </Box>
  );
};
