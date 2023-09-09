'use client';

import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useForm, zodResolver } from '@mantine/form';
import { useEffect } from 'react';
import { useFindDataSourceQuery, useUpdateDataSourceMutation } from '@/store/data-source';
import { UpdateDataSourceDto } from '@/types/data-source';
import { DataSourceInputs, DataSourceSchema } from '@/components/Forms/data-source';
import { FormUpdate } from '@/components/Common/Layout/FormUpdate';
import { useParams } from 'next/navigation';

export default function DataSourcePage() {
  const { slug } = useParams();
  const id = parseInt(slug as string, 10);

  const { data, isSuccess, isError, isLoading } = useFindDataSourceQuery(slug ? id : skipToken);

  const form = useForm<UpdateDataSourceDto>({
    initialValues: {
      name: '',
      url: '',
      secret: '',
    },
    validate: zodResolver(DataSourceSchema),
    validateInputOnChange: true,
  });

  useEffect(() => {
    if (isSuccess) {
      form.setValues({
        name: data.name,
        url: data.url,
        secret: data.secret,
      });
    }
  }, [isSuccess]);

  return (
    <FormUpdate
      title="Fonte dos Dados"
      useUpdateMutation={useUpdateDataSourceMutation}
      type="update"
      FormInputs={DataSourceInputs<UpdateDataSourceDto>}
      form={form}
      id={id}
    />
  );
}
