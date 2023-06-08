import { FormLayout } from '@/components/Common/Layout/FormLayout';
import React, { useEffect } from 'react';
import { UpdateDashboardCategoryDto } from '@/types/dashboard-category'
import { useForm } from '@mantine/form';
import { DashboardCategoryInputs } from '@/components/Forms/dashboard-category';
import { 
  useFindDashboardCategoryQuery, 
  useRemoveDashboardCategoryMutation
} from '@/store/dashboard-categories';
import { useRouter } from 'next/router';
import { skipToken } from '@reduxjs/toolkit/dist/query';

export default function OccupationCategoriesPage() {
  const router = useRouter();
  const { slug } = router.query;
  const id = parseInt(slug as string, 10);

  const { data, isSuccess, isError, isLoading } =
    useFindDashboardCategoryQuery(!!slug ? id : skipToken);

  const form = useForm<UpdateDashboardCategoryDto>({

  });

  useEffect(() => {
    if (isSuccess) {
      console.log(data)
      form.setValues(data);
    }
  }, [isSuccess]);

  return (
    <FormLayout 
      title="Categorias de Ocupacoes"
      useRemoveMutation={useRemoveDashboardCategoryMutation}
      type="preview"
      FormInputs={DashboardCategoryInputs<UpdateDashboardCategoryDto>}
      form={form}
      pageModuleUrl="dashboard-category"
      id={id}
    />
  );
}
