'use client';

import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useForm, zodResolver } from '@mantine/form';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useFindEstablishmentQuery, useUpdateEstablishmentMutation } from '@/store/establishments';
import { UpdateEstablishmentDto } from '@/types/establishment';
import { EstablishmentInputs, EstablishmentSchema } from '@/components/Forms/establishment';
import { FormLayout } from '@/components/Common/Layout/FormLayout';

export default function EstablishmentPage() {
  const { slug } = useParams();
  const id = parseInt(slug as string, 10);

  const { data, isSuccess } = useFindEstablishmentQuery(slug ? id : skipToken);

  const form = useForm<UpdateEstablishmentDto>({
    initialValues: {
      name: '',
      cnes: '',
      directorship: '',
    },

    validate: zodResolver(EstablishmentSchema),
    validateInputOnChange: true,
  });

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
    <FormLayout
      title="Categoria de Estabelecimento"
      useUpdateMutation={useUpdateEstablishmentMutation}
      type="update"
      FormInputs={EstablishmentInputs<UpdateEstablishmentDto>}
      form={form}
      id={id}
    />
  );
}
