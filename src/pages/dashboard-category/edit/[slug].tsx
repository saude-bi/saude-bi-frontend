import { EditLayout } from '@/components/Common/Layout/EditLayout';
import {
  OccupationCategory,
  useCreateOccupationCategoryMutation,
  useRemoveOccupationCategoryMutation,
  useFindAllOccupationCategoriesQuery,
  useUpdateOccupationCategoryMutation,
} from '@/store/occupation-categories';
import { Button, Grid, LoadingOverlay, Stack, Text, TextInput } from '@mantine/core';
import React, { useEffect, useMemo, useRef } from 'react';
import { DashboardCategory, DashboardCategoryDto } from '@/types/dashboard-category'
import { useForm } from '@mantine/form';
import { DashboardCategoryFormProvider, DashboardCategoryInputs } from '@/components/Forms/dashboard-category';
import { notifications } from '@mantine/notifications';
import { useUpdateDashboardCategoryMutation, useFindDashboardCategoryQuery, useRemoveDashboardCategoryMutation } from '@/store/dashboard-categories';
import { useRouter } from 'next/router';
import { skipToken } from '@reduxjs/toolkit/dist/query';

export default function OccupationCategoriesPage() {
  const [submit, { isSuccess: isSaveSuccess, isError: isSaveError }] = useUpdateDashboardCategoryMutation();
  const router = useRouter();
  const { slug } = router.query;
  const id = parseInt(slug as string, 10);

  const { data, isSuccess, isError, isLoading } =
    useFindDashboardCategoryQuery(!!slug ? id : skipToken);

  const form = useForm<DashboardCategoryDto>({
    initialValues: {
      name: ''
    },
    validate: {
      name: (values) => (
        values === undefined
          ? 'Campo nome da categoria é obrigatório'
          : values.length < 4
          ? 'O nome da categoria informado é muito curto'
          : null
      )
    },
    validateInputOnChange: true
  });

  const trigerSubmit = () => {
    if (!form.validate().hasErrors) {
      submit({ id, body: form.values})
    }
  };

  useEffect(() => {
    if (isSuccess) {
      form.setValues({
        name: data.name
      });
    }

    if (isSaveSuccess) {
      router.push('/dashboard-category');
    }
    if (isSaveError) {
      notifications.show({ message: 'Erro ao cadastrar uma Categoria', color: 'red' })
    }
  }, [isSaveSuccess, isSuccess]);

  return (
    <EditLayout 
      title="Categorias de Ocupacoes"
      handleSubmit={trigerSubmit}
      useRemoveMutation={useRemoveDashboardCategoryMutation}
      type="edit"
      id={id}
    >
      <DashboardCategoryFormProvider form={form}>
        <form onSubmit={form.onSubmit(() => {})}>
          {isLoading || isError ? (
              <LoadingOverlay visible />
            ) : (
              <DashboardCategoryInputs disabled={false} />
            )}
        </form>
      </DashboardCategoryFormProvider>
    </EditLayout>
  );
}
