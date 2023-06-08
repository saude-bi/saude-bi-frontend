import { UpdateDashboardCategoryDto } from "@/types/dashboard-category";
import { Box, TextInput } from '@mantine/core';
import { z } from 'zod';
import { GenericForm } from "../Common/Layout/FormLayout";

export const DashboardCategorySchema = z.object({
  name: z.string({
    required_error: 'Campo nome da categoria é obrigatório'
  }).min(2, { message: 'O nome da categoria informado é muito curto' })
});

type Props = {
  disabled: boolean,
  form: GenericForm<UpdateDashboardCategoryDto>
}

export const DashboardCategoryInputs = ({ 
  disabled = false,
  form
 }: Props) => {
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
}