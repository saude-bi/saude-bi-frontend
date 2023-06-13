import { FormLayout } from '@/components/Common/Layout/FormLayout';
import React from 'react';
import { CreateOccupationCategoryDto } from '@/types/occupation-category';
import { useForm, zodResolver } from '@mantine/form';
import {
  OccupationCategoryInputs,
  OccupationCategorySchema,
} from '@/components/Forms/occupation-category';
import { useRouter } from 'next/router';
import { useCreateOccupationCategoryMutation } from '@/store/occupation-categories';

export default function OccupationCategories() {
  const router = useRouter();

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
