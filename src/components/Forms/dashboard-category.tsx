import { DashboardCategoryDto } from "@/types/dashboard-category";
import { Box, TextInput } from '@mantine/core';
import { UseForm } from "@mantine/form/lib/types";

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