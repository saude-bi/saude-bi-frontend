import { DashboardCategory, DashboardCategoryDto } from "@/types/dashboard-category";
import { createFormContext } from "@mantine/form";
import { Box, TextInput } from '@mantine/core';


export const [DashboardCategoryFormProvider, dashboardCategoryFormContext, useDashboardCategoryForm] =
  createFormContext<DashboardCategoryDto>();

export const DashboardCategoryInputs = ({ disabled = false }) => {
  const form = dashboardCategoryFormContext();
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