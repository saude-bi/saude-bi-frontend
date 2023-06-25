import React from 'react';
import { useForm, zodResolver } from '@mantine/form';
import { useRouter } from 'next/router';
import { FormLayout } from '@/components/Common/Layout/FormLayout';
import { CreateDataSourceDto } from '@/types/data-source';
import { DataSourceInputs, DataSourceSchema } from '@/components/Forms/data-source';
import { useCreateEstablishmentMutation } from '@/store/establishments';

export default function DataSourcePage() {
  const router = useRouter();

  const form = useForm<CreateDataSourceDto>({
    initialValues: {
      name: '',
    },
    validate: zodResolver(DataSourceSchema),
    validateInputOnChange: true,
  });

  return (
    <FormLayout
      title="DataSource"
      useCreateMutation={useCreateEstablishmentMutation}
      FormInputs={DataSourceInputs<CreateDataSourceDto>}
      form={form}
      type="create"
    />
  );
}
