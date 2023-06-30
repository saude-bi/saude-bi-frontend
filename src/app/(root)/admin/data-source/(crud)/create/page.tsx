'use client';

import React from 'react';
import { useForm, zodResolver } from '@mantine/form';
import { FormLayout } from '@/components/Common/Layout/FormLayout';
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
    <FormLayout
      title="Fonte dos Dados"
      useCreateMutation={useCreateDataSourceMutation}
      FormInputs={DataSourceInputs<CreateDataSourceDto>}
      form={form}
      type="create"
    />
  );
}
