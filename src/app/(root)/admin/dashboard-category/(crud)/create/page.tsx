'use client';

import { FormCreate } from '@/components/Common/Layout/FormCreate';
import React from 'react';
import { CreateDashboardCategoryDto } from '@/types/dashboard-category';
import { useForm, zodResolver } from '@mantine/form';
import {
  DashboardCategoryInputs,
  DashboardCategorySchema,
} from '@/components/Forms/dashboard-category';
import { useCreateDashboardCategoryMutation } from '@/store/dashboard-categories';

export default function DashboardCategoriesCreatePage() {
  const form = useForm<CreateDashboardCategoryDto>({
    initialValues: {
      name: '',
    },
    validate: zodResolver(DashboardCategorySchema),
    validateInputOnChange: true,
  });

  return (
    <FormCreate
      title="Categorias de Dashboard"
      useCreateMutation={useCreateDashboardCategoryMutation}
      FormInputs={DashboardCategoryInputs<CreateDashboardCategoryDto>}
      form={form}
      type="create"
    />
  );
}
