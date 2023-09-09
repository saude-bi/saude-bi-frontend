'use client';

import { FormCreate } from '@/components/Common/Layout/FormCreate';
import React from 'react';
import { CreateOccupationCategoryDto } from '@/types/occupation-category';
import { useForm, zodResolver } from '@mantine/form';
import {
  OccupationCategoryInputs,
  OccupationCategorySchema,
} from '@/components/Forms/occupation-category';
import { useCreateOccupationCategoryMutation } from '@/store/occupation-categories';

export default function OccupationCategories() {
  const form = useForm<CreateOccupationCategoryDto>({
    initialValues: {
      name: '',
    },
    validate: zodResolver(OccupationCategorySchema),
    validateInputOnChange: true,
  });

  return (
    <FormCreate
      title="Categoria de Ocupações"
      useCreateMutation={useCreateOccupationCategoryMutation}
      FormInputs={OccupationCategoryInputs<CreateOccupationCategoryDto>}
      form={form}
      type="create"
    />
  );
}
