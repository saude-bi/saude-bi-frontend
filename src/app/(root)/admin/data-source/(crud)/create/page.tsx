'use client';

import React from 'react';
import { useForm, zodResolver } from '@mantine/form';
import { FormCreate } from '@/components/Common/Layout/FormCreate';
import { CreateDataSourceDto } from '@/types/data-source';
import { DataSourceInputs, DataSourceSchema } from '@/components/Forms/data-source';
import { useCreateDataSourceMutation } from '@/store/data-source';

export default function DataSourcePage() {
  const form = useForm<CreateDataSourceDto>({
    initialValues: {
      name: '',
      url: '',
      secret: '',
    },
    validate: zodResolver(DataSourceSchema),
    validateInputOnChange: true,
  });

  return (
    <FormCreate
      title="Fonte dos Dados"
      useCreateMutation={useCreateDataSourceMutation}
      FormInputs={DataSourceInputs<CreateDataSourceDto>}
      form={form}
      type="create"
    />
  );
}
