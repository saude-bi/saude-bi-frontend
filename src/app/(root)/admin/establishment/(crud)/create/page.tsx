'use client';

import { FormLayout } from '@/components/Common/Layout/FormLayout';
import React from 'react';
import { CreateEstablishmentDto } from '@/types/establishment';
import { useForm, zodResolver } from '@mantine/form';
import { EstablishmentInputs, EstablishmentSchema } from '@/components/Forms/establishment';
import { useCreateEstablishmentMutation } from '@/store/establishments';
import { useRouter } from 'next/navigation';

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
