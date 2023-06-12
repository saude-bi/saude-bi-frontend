import { Box, TextInput } from '@mantine/core';
import { z } from 'zod';
import { GenericForm } from '@/components/Common/Layout/FormLayout';

export const EstablishmentSchema = z.object({
    name: z
      .string({
        required_error: 'Campo nome do estabelecimento é obrigatório',
      }),
    cnes: z
      .string({
        required_error: 'Campo cnes do estabelecimento é obrigatório',
      }),
});

type Props<T> = {
    disabled: boolean;
    form: GenericForm<T>;
};

export const EstablishmentInputs = <T,>({ disabled = false, form }: Props<T>) => {
  return (
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
        label="Cnes"
        placeholder="Cnes"
        {...form.getInputProps('cnes')}
        disabled={disabled}
      />
    </Box>
  );
};
