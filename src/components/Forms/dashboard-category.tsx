import { DashboardCategoryDto } from "@/types/dashboard-category";
import { createFormContext } from "@mantine/form";
import { TextInput } from '@mantine/core';


export const [DashboardCategoryFormProvider, dashboardCategoryFormContext, useDashboardCategoryForm] =
  createFormContext<DashboardCategoryDto>();

export const DashboardCategoryInputs = () => {
  const form = dashboardCategoryFormContext();
  return (
    <TextInput
      withAsterisk
      label="Categoria"
      placeholder="Categoria"
      {...form.getInputProps('name')}
    />
  );
}