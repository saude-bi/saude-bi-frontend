'use client';

import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useForm, zodResolver } from '@mantine/form';
import { useEffect } from 'react';
import { useFindEstablishmentQuery, useUpdateEstablishmentMutation } from '@/store/establishments';
import { UpdateEstablishmentDto } from '@/types/establishment';
import { EstablishmentInputs, EstablishmentSchema } from '@/components/Forms/establishment';
import { FormUpdate } from '@/components/Common/Layout/FormUpdate';
import { useParams } from 'next/navigation';

export default function EstablishmentPage() {
  const { slug } = useParams();
  const id = parseInt(slug as string, 10);

  const { data, isSuccess, isError, isLoading } = useFindEstablishmentQuery(slug ? id : skipToken);

  const form = useForm<UpdateEstablishmentDto>({
    initialValues: {
      name: '',
      cnes: '',
      directorship: ''
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
    <FormUpdate
      title="Categoria de Estabelecimento"
      useUpdateMutation={useUpdateEstablishmentMutation}
      type="update"
      FormInputs={EstablishmentInputs<UpdateEstablishmentDto>}
      form={form}
      id={id}
    />
  );
}
