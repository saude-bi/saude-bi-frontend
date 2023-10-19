'use client';

import React, { useEffect } from 'react';
import { useForm, zodResolver } from '@mantine/form';
import { useParams } from 'next/navigation';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { FormLayout } from '@/components/Common/Layout/FormLayout';
import { UpdateDashboardCategoryDto } from '@/types/dashboard-category';
import {
  DashboardCategoryInputs,
  DashboardCategorySchema,
} from '@/components/Forms/dashboard-category';
import {
  useUpdateDashboardCategoryMutation,
  useFindDashboardCategoryQuery,
} from '@/store/dashboard-categories';

export default function DashboardCategoriesPage() {
  const { slug } = useParams();
  const id = parseInt(slug as string, 10);

  const { data, isSuccess, isError, isLoading } = useFindDashboardCategoryQuery(
    slug ? id : skipToken
  );

  const form = useForm<UpdateDashboardCategoryDto>({
    initialValues: {
      name: '',
    },
    validate: zodResolver(DashboardCategorySchema),
    validateInputOnChange: true,
  });

  useEffect(() => {
    if (isSuccess) {
      form.setValues({
        name: data.name,
      });
    }
  }, [isSuccess]);

  return (
    <FormLayout
      title="Categorias de Dashboard"
      useUpdateMutation={useUpdateDashboardCategoryMutation}
      type="update"
      FormInputs={DashboardCategoryInputs<UpdateDashboardCategoryDto>}
      form={form}
      id={id}
    />
  );
}
