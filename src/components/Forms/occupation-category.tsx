import { UpdateOccupationCategoryDto } from '@/types/occupation-category';
import { Box, TextInput } from '@mantine/core';
import { z } from 'zod';
import { GenericForm } from '../Common/Layout/FormLayout';

export const OccupationCategorySchema = z.object({
  name: z
    .string({
      required_error: 'Campo nome da categoria é obrigatório',
    })
    .min(4, { message: 'O nome da categoria informado é muito curto' }),
});

type Props<T> = {
  disabled: boolean;
  form: GenericForm<T>;
};

export const OccupationCategoryInputs = <T,>({ disabled = false, form }: Props<T>) => {
  return (
    <Box>
      <TextInput
        withAsterisk
        label="Categoria"
        placeholder="Categoria"
        {...form.getInputProps('name')}
        disabled={disabled}
      />
    </Box>
  );
};
