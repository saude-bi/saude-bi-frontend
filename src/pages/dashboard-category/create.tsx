import { EditLayout } from '@/components/Common/Layout/EditLayout';
import {
  OccupationCategory,
  useCreateOccupationCategoryMutation,
  useRemoveOccupationCategoryMutation,
  useFindAllOccupationCategoriesQuery,
  useUpdateOccupationCategoryMutation,
} from '@/store/occupation-categories';
import { Button, Grid, Stack, Text, TextInput } from '@mantine/core';
import React, { useEffect, useMemo, useRef } from 'react';
import { DashboardCategory, DashboardCategoryDto } from '@/types/dashboard-category'
import { useForm } from '@mantine/form';
import { DashboardCategoryFormProvider, DashboardCategoryInputs } from '@/components/Forms/dashboard-category';
import { notifications } from '@mantine/notifications';
import { useCreateDashboardCategoryMutation } from '@/store/dashboard-categories';
import { useRouter } from 'next/router';

export default function OccupationCategoriesPage() {
  const [submit, { isSuccess, isError }] = useCreateDashboardCategoryMutation();
  const router = useRouter();

  const form = useForm<DashboardCategory>({
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
      submit(form.values)
    }
  };

  useEffect(() => {
    if (isSuccess) {
      router.push('/dashboard-category');
    }
    if (isError) {
      notifications.show({ message: 'Erro ao cadastrar uma Categoria', color: 'red' })
    }
  }, [isSuccess]);

  return (
    <EditLayout title="Categorias de Ocupacoes" handleSubmit={trigerSubmit}>
      <DashboardCategoryFormProvider form={form}>
        <form onSubmit={form.onSubmit(() => {})}>
          <DashboardCategoryInputs />
        </form>
      </DashboardCategoryFormProvider>
    </EditLayout>
  );
}
