'use client';

import React from 'react';
import { useForm, zodResolver } from '@mantine/form';
import { useRouter } from 'next/navigation';
import { FormLayout } from '@/components/Common/Layout/FormLayout';
import { CreateEstablishmentDto } from '@/types/establishment';
import { EstablishmentInputs, EstablishmentSchema } from '@/components/Forms/establishment';
import { useCreateEstablishmentMutation } from '@/store/establishments';

export default function EstablishmentPage() {
  const router = useRouter();

  const form = useForm<CreateEstablishmentDto>({
    initialValues: {
      name: '',
      cnes: '',
      directorship: '',
    },
    validate: zodResolver(EstablishmentSchema),
    validateInputOnChange: true,
  });

  return (
    <FormLayout
      title="Estabelecimentos"
      useCreateMutation={useCreateEstablishmentMutation}
      FormInputs={EstablishmentInputs<CreateEstablishmentDto>}
      form={form}
      type="create"
    />
  );
}
