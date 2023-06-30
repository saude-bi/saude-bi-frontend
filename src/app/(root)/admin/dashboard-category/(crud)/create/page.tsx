'use client';

import { FormLayout } from '@/components/Common/Layout/FormLayout';
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
    <FormLayout
      title="Categorias de Dashboard"
      useCreateMutation={useCreateDashboardCategoryMutation}
      FormInputs={DashboardCategoryInputs<CreateDashboardCategoryDto>}
      form={form}
      type="create"
    />
  );
}
