import { FormLayout } from '@/components/Common/Layout/FormLayout';
import React, { useEffect } from 'react';
import { DashboardCategoryDto } from '@/types/dashboard-category';
import { useForm } from '@mantine/form';
import { DashboardCategoryInputs } from '@/components/Forms/dashboard-category';
import {
  useUpdateDashboardCategoryMutation,
  useFindDashboardCategoryQuery,
} from '@/store/dashboard-categories';
import { useRouter } from 'next/router';
import { skipToken } from '@reduxjs/toolkit/dist/query';

export default function OccupationCategoriesPage() {
  const router = useRouter();
  const { slug } = router.query;
  const id = parseInt(slug as string, 10);

  const { data, isSuccess, isError, isLoading } = useFindDashboardCategoryQuery(
    !!slug ? id : skipToken
  );

  const form = useForm<DashboardCategoryDto>({
    initialValues: {
      name: '',
    },
    validate: {
      name: (values) =>
        values === undefined
          ? 'Campo nome da categoria é obrigatório'
          : values.length < 4
          ? 'O nome da categoria informado é muito curto'
          : null,
    },
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
      title="Categorias de Ocupacoes"
      useUpdateMutation={useUpdateDashboardCategoryMutation}
      type="update"
      FormInputs={DashboardCategoryInputs}
      form={form}
      id={id}
    />
  );
}
