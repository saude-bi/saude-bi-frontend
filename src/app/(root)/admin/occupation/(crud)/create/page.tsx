'use client';

import { FormLayout } from '@/components/Common/Layout/FormLayout';
import React from 'react';
import { useForm, zodResolver } from '@mantine/form';
import { CreateOccupationDto } from '@/types/occupations';
import { OccupationInputs, OccupationSchema } from '@/components/Forms/occupation';
import { useCreateOccupationMutation } from '@/store/occupations';

export default function Occupations() {
  const form = useForm<CreateOccupationDto>({
    initialValues: {
      name: '',
      cbo: '',
      category: '',
    },
    validate: zodResolver(OccupationSchema),
    validateInputOnChange: true,
  });

  return (
    <FormLayout
      title="Ocupações"
      useCreateMutation={useCreateOccupationMutation}
      FormInputs={OccupationInputs<CreateOccupationDto>}
      form={form}
      type="create"
    />
  );
}
