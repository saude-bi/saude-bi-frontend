'use client';

import React, { useEffect } from 'react';
import { useForm, zodResolver } from '@mantine/form';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useParams } from 'next/navigation';
import { FormLayout } from '@/components/Common/Layout/FormLayout';
import { UpdateOccupationCategoryDto } from '@/types/occupation-category';
import {
  OccupationCategoryInputs,
  OccupationCategorySchema,
} from '@/components/Forms/occupation-category';
import {
  useUpdateOccupationCategoryMutation,
  useFindOccupationCategoryQuery,
} from '@/store/occupation-categories';

export default function OccupationCategoriesPage() {
  const { slug } = useParams();
  const id = parseInt(slug as string, 10);

  const { data, isSuccess } = useFindOccupationCategoryQuery(slug ? id : skipToken);

  const form = useForm<UpdateOccupationCategoryDto>({
    initialValues: {
      name: '',
    },
    validate: zodResolver(OccupationCategorySchema),
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
      title="Categorias de Ocupações"
      useUpdateMutation={useUpdateOccupationCategoryMutation}
      type="update"
      FormInputs={OccupationCategoryInputs<UpdateOccupationCategoryDto>}
      form={form}
      id={id}
    />
  );
}
