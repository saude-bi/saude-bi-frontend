'use client';

import React, { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useParams } from 'next/navigation';
import { FormLayout } from '@/components/Common/Layout/FormLayout';
import { UpdateDashboardCategoryDto } from '@/types/dashboard-category';
import { DashboardCategoryInputs } from '@/components/Forms/dashboard-category';
import {
  useFindDashboardCategoryQuery,
  useRemoveDashboardCategoryMutation,
} from '@/store/dashboard-categories';

export default function DashboardCategoriesPage() {
  const { slug } = useParams();
  const id = parseInt(slug as string, 10);

  const { data, isSuccess } = useFindDashboardCategoryQuery(slug ? id : skipToken);

  const form = useForm<UpdateDashboardCategoryDto>({});

  useEffect(() => {
    if (isSuccess) {
      form.setValues(data);
    }
  }, [isSuccess]);

  return (
    <FormLayout
      title="Categorias de Dashboard"
      useRemoveMutation={useRemoveDashboardCategoryMutation}
      type="preview"
      FormInputs={DashboardCategoryInputs<UpdateDashboardCategoryDto>}
      form={form}
      id={id}
    />
  );
}
