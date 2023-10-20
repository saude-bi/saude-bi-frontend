'use client';

import React, { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useParams } from 'next/navigation';
import { FormLayout } from '@/components/Common/Layout/FormLayout';
import { UpdateOccupationCategoryDto } from '@/types/occupation-category';
import {
  useFindOccupationCategoryQuery,
  useRemoveOccupationCategoryMutation,
} from '@/store/occupation-categories';
import { OccupationCategoryInputs } from '@/components/Forms/occupation-category';

export default function OccupationCategoriesPage() {
  const { slug } = useParams();
  const id = parseInt(slug as string, 10);
  const { data, isSuccess } = useFindOccupationCategoryQuery(slug ? id : skipToken);

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
