'use client';

import { FormLayout } from '@/components/Common/Layout/FormLayout';
import React, { useEffect } from 'react';
import { UpdateOccupationCategoryDto } from '@/types/occupation-category';
import { useForm } from '@mantine/form';
import {
  useFindOccupationCategoryQuery,
  useRemoveOccupationCategoryMutation,
} from '@/store/occupation-categories';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { OccupationCategoryInputs } from '@/components/Forms/occupation-category';
import { useParams } from 'next/navigation';

export default function OccupationCategoriesPage() {
  const { slug } = useParams();
  const id = parseInt(slug as string, 10);
  const { data, isSuccess, isError, isLoading } = useFindOccupationCategoryQuery(
    !!slug ? id : skipToken
  );

  const form = useForm<UpdateOccupationCategoryDto>({});

  useEffect(() => {
    if (isSuccess) {
      form.setValues(data);
    }
  }, [isSuccess]);

  return (
    <FormLayout
      title="Categorias de Ocupacoes"
      useRemoveMutation={useRemoveOccupationCategoryMutation}
      type="preview"
      FormInputs={OccupationCategoryInputs<UpdateOccupationCategoryDto>}
      form={form}
      id={id}
    />
  );
}
