'use client';

import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useForm } from '@mantine/form';
import { useEffect } from 'react';
import { UpdateEstablishmentDto } from '@/types/establishment';
import { useFindEstablishmentQuery, useRemoveEstablishmentMutation } from '@/store/establishments';
import { FormPreview } from '@/components/Common/Layout/FormPreview';
import { EstablishmentInputs } from '@/components/Forms/establishment';
import { useParams } from 'next/navigation';

export default function EstablishmentPage() {
  const { slug } = useParams();
  const id = parseInt(slug as string, 10);

  const { data, isSuccess, isError, isLoading } = useFindEstablishmentQuery(slug ? id : skipToken);

  const form = useForm<UpdateEstablishmentDto>({});

  useEffect(() => {
    if (isSuccess) {
      form.setValues({
        name: data.name,
        cnes: data.cnes,
        directorship: data.directorship.id.toString(),
      });
    }
  }, [isSuccess]);

  return (
    <FormPreview
      title="Dashboard de Estabelecimentos"
      useRemoveMutation={useRemoveEstablishmentMutation}
      type="preview"
      FormInputs={EstablishmentInputs<UpdateEstablishmentDto>}
      form={form}
      id={id}
    />
  );
}
