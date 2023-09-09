'use client';

import { FormUpdate } from '@/components/Common/Layout/FormUpdate';
import React, { useEffect } from 'react';
import { useForm, zodResolver } from '@mantine/form';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useParams } from 'next/navigation';
import { UpdateDirectorshipDto } from '@/types/directorship';
import { useFindDirectorshipQuery, useUpdateDirectorshipMutation } from '@/store/directorship';
import { DirectorshipInputs, DirectorshipSchema } from '@/components/Forms/directorship';

export default function UpdateDirectorshipPage() {
  const { slug } = useParams();
  const id = parseInt(slug as string, 10);

  const { data, isSuccess, isError, isLoading } = useFindDirectorshipQuery(!!slug ? id : skipToken);

  const form = useForm<UpdateDirectorshipDto>({
    initialValues: {
      name: '',
      acronym: '',
    },
    validate: zodResolver(DirectorshipSchema),
    validateInputOnChange: true,
  });

  useEffect(() => {
    if (isSuccess) {
      form.setValues({
        name: data.name,
        acronym: data.acronym,
      });
    }
  }, [isSuccess]);

  return (
    <FormUpdate
      title="Diretoria"
      useUpdateMutation={useUpdateDirectorshipMutation}
      type="update"
      FormInputs={DirectorshipInputs<UpdateDirectorshipDto>}
      form={form}
      id={id}
    />
  );
}
