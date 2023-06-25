import { useRouter } from 'next/router';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useForm } from '@mantine/form';
import { useEffect } from 'react';
import { UpdateDataSourceDto } from '@/types/data-source';
import { useFindDataSourceQuery } from '@/store/data-source';
import { FormLayout } from '@/components/Common/Layout/FormLayout';
import { useRemoveEstablishmentMutation } from '@/store/establishments';
import { DataSourceInputs } from '@/components/Forms/data-source';

export default function DataSource() {
  const router = useRouter();
  const { slug } = router.query;
  const id = parseInt(slug as string, 10);

  const { data, isSuccess, isError, isLoading } = useFindDataSourceQuery(slug ? id : skipToken);

  const form = useForm<UpdateDataSourceDto>({});

  useEffect(() => {
    if (isSuccess) {
      form.setValues(data);
    }
  }, [isSuccess]);

  return (
    <FormLayout
      title="Dashboard de DataSource"
      useRemoveMutation={useRemoveEstablishmentMutation}
      type="preview"
      FormInputs={DataSourceInputs<UpdateDataSourceDto>}
      form={form}
      id={id}
    />
  );
}