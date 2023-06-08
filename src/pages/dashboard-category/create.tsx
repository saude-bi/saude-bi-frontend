import { FormLayout } from '@/components/Common/Layout/FormLayout';
import React, { useEffect } from 'react';
import { DashboardCategoryDto } from '@/types/dashboard-category'
import { useForm } from '@mantine/form';
import { DashboardCategoryInputs } from '@/components/Forms/dashboard-category';
import { notifications } from '@mantine/notifications';
import { useCreateDashboardCategoryMutation } from '@/store/dashboard-categories';
import { useRouter } from 'next/router';

export default function OccupationCategoriesPage() {
  const [submit, { isSuccess, isError }] = useCreateDashboardCategoryMutation();
  const router = useRouter();

  const form = useForm<DashboardCategoryDto>({
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
    <FormLayout 
      title="Categorias de Ocupacoes"
      handleSubmit={trigerSubmit}
      FormInputs={DashboardCategoryInputs}
      form={form}
      type="create"
    >
    </FormLayout>
  );
}
