import { UpdateDashboardCategoryDto } from '@/types/dashboard-category';
import { Box, TextInput } from '@mantine/core';
import { z } from 'zod';
import { GenericForm } from '../Common/Layout/FormLayout';

export const MedicalWorkerSchema = z.object({
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

export const MedicalWorkerInputs = <T,>({ disabled = false, form }: Props<T>) => {
  return (
    <Box>
      <TextInput
        withAsterisk
        label="Nome do Profissional"
        placeholder="Nome do Profissional"
        {...form.getInputProps('name')}
        disabled={disabled}
      />

      <TextInput
        withAsterisk
        label="Nome do Profissional"
        placeholder="Nome do Profissional"
        {...form.getInputProps('name')}
        disabled={disabled}
      />
    </Box>
  );
};
