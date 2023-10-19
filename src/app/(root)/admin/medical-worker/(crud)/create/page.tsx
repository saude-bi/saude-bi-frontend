'use client';

import React from 'react';
import { useForm, zodResolver } from '@mantine/form';
import { FormLayout } from '@/components/Common/Layout/FormLayout';
import { CreateMedicalWorkerDto } from '@/types/medical-worker';
import { useCreateMedicalWorkerMutation } from '@/store/medical-worker';
import { MedicalWorkerInputs, MedicalWorkerSchema } from '@/components/Forms/medical-worker';

export default function CreateMedicalWorkerPage() {
  const form = useForm<CreateMedicalWorkerDto>({
    initialValues: {
      user: {
        username: '',
        password: '',
        confirmPassword: '',
      },
      name: '',
      gender: '',
      cns: '',
      cpf: '',
    },
    validate: zodResolver(MedicalWorkerSchema),
    validateInputOnChange: true,
  });

  return (
    <FormLayout
      title="Categorias de Dashboard"
      useCreateMutation={useCreateMedicalWorkerMutation}
      FormInputs={MedicalWorkerInputs<CreateMedicalWorkerDto>}
      form={form}
      type="create"
    />
  );
}
