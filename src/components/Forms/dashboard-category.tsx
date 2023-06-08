import { DashboardCategory, DashboardCategoryDto } from "@/types/dashboard-category";
import { createFormContext } from "@mantine/form";
import { Box, TextInput } from '@mantine/core';
import { UseForm } from "@mantine/form/lib/types";


export const [DashboardCategoryFormProvider, dashboardCategoryFormContext, useDashboardCategoryForm] =
  createFormContext<DashboardCategoryDto>();

type Props = {
  disabled: boolean,
  form: ReturnType<UseForm<DashboardCategoryDto>>
}

export const DashboardCategoryInputs = ({ 
  disabled = false,
  form
 }: Props) => {
  return (
    <Box>
      <input
        {...form.getInputProps('name')}
        type="hidden"
        disabled={disabled}
      />

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