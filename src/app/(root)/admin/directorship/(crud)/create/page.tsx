'use client';

import { FormLayout } from '@/components/Common/Layout/FormLayout';
import React from 'react';
import { useForm, zodResolver } from '@mantine/form';
import { CreateDirectorshipDto } from '@/types/directorship';
import { useCreateDirectorshipMutation } from '@/store/directorship';
import { DirectorshipInputs, DirectorshipSchema } from '@/components/Forms/directorship';

export default function CreateDirectorshipPage() {
  const form = useForm<CreateDirectorshipDto>({
    initialValues: {
      name: '',
      acronym: '',
    },
    validate: zodResolver(DirectorshipSchema),
    validateInputOnChange: true,
  });

  return (
    <FormLayout
      title="Categoria de Ocupações"
      useCreateMutation={useCreateDirectorshipMutation}
      FormInputs={DirectorshipInputs<CreateDirectorshipDto>}
      form={form}
      type="create"
    />
  );
}
