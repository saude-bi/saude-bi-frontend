'use client';

import React from 'react';
import { useForm, zodResolver } from '@mantine/form';
import { FormLayout } from '@/components/Common/Layout/FormLayout';
import { CreateOccupationCategoryDto } from '@/types/occupation-category';
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
    <FormLayout
      title="Categoria de Ocupações"
      useCreateMutation={useCreateOccupationCategoryMutation}
      FormInputs={OccupationCategoryInputs<CreateOccupationCategoryDto>}
      form={form}
      type="create"
    />
  );
}
