'use client';

import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useForm } from '@mantine/form';
import { useEffect } from 'react';
import { UpdateDataSourceDto } from '@/types/data-source';
import { useFindDataSourceQuery } from '@/store/data-source';
import { FormPreview } from '@/components/Common/Layout/FormPreview';
import { useRemoveEstablishmentMutation } from '@/store/establishments';
import { DataSourceInputs } from '@/components/Forms/data-source';
import { useParams } from 'next/navigation';

export default function DataSource() {
  const { slug } = useParams();
  const id = parseInt(slug as string, 10);

  const { data, isSuccess, isError, isLoading } = useFindDataSourceQuery(slug ? id : skipToken);

  const form = useForm<UpdateDataSourceDto>({});

  useEffect(() => {
    if (isSuccess) {
      form.setValues(data);
    }
  }, [isSuccess]);

  return (
    <FormPreview
      title="Fonte dos Dados"
      useRemoveMutation={useRemoveEstablishmentMutation}
      type="preview"
      FormInputs={DataSourceInputs<UpdateDataSourceDto>}
      form={form}
      id={id}
    />
  );
}
