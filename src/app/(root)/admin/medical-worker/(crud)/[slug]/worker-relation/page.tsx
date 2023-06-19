'use client';

import { FormLayout } from '@/components/Common/Layout/FormLayout';
import React from 'react';
import { useForm, zodResolver } from '@mantine/form';
import { CreateWorkRelationDto } from '@/types/medical-worker';
import { MedicalWorkerInputs, MedicalWorkerSchema } from '@/components/Forms/medical-worker';
import { useCreateWorkRelationMutation } from '@/store/work-relation';

export default function CreateMedicalWorkerPage() {
  const form = useForm<CreateWorkRelationDto>({
    initialValues: {
      establishment: -1,
      occupation: -1,
    },
    validate: zodResolver(MedicalWorkerSchema),
    validateInputOnChange: true,
  });

  return (
    <FormLayout
      title="Categorias de Dashboard"
      useCreateMutation={useCreateWorkRelationMutation}
      FormInputs={MedicalWorkerInputs<CreateWorkRelationDto>}
      form={form}
      type="create"
    />
  );
}
