import { FormLayout } from '@/components/Common/Layout/FormLayout';
import React from 'react';
import { CreateDashboardCategoryDto } from '@/types/dashboard-category';
import { useForm, zodResolver } from '@mantine/form';
import {
  DashboardCategoryInputs,
  DashboardCategorySchema,
} from '@/components/Forms/dashboard-category';
import { useCreateDashboardCategoryMutation } from '@/store/dashboard-categories';
import { useRouter } from 'next/router';

export default function OccupationCategoriesPage() {
  const router = useRouter();

  const form = useForm<CreateDashboardCategoryDto>({
    initialValues: {
      name: '',
    },
    validate: zodResolver(DashboardCategorySchema),
    validateInputOnChange: true,
  });

  return (
    <FormLayout
      title="Categorias de Ocupacoes"
      useCreateMutation={useCreateDashboardCategoryMutation}
      FormInputs={DashboardCategoryInputs<CreateDashboardCategoryDto>}
      form={form}
      type="create"
    />
  );
}
