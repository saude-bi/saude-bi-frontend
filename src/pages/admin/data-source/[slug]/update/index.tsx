import { useRouter } from 'next/router';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useForm, zodResolver } from '@mantine/form';
import { useEffect } from 'react';
import {
  useFindDataSourceQuery,
  useUpdateDataSourceMutation,
} from '@/store/data-source';
import { UpdateDataSourceDto } from '@/types/data-source';
import {
  DataSourceInputs,
  DataSourceSchema,
} from '@/components/Forms/data-source';
import { FormLayout } from '@/components/Common/Layout/FormLayout';

export default function DataSourcePage() {
  const router = useRouter();
  const { slug } = router.query;
  const id = parseInt(slug as string, 10);

  const { data, isSuccess, isError, isLoading } = useFindDataSourceQuery(
    slug ? id : skipToken
  );

  const form = useForm<UpdateDataSourceDto>({
    initialValues: {
      name: '',
    },
    validate: zodResolver(DataSourceSchema),
    validateInputOnChange: true,
  });

  useEffect(() => {
    if (isSuccess) {
      form.setValues({
        name: data.name,
      });
    }
  }, [isSuccess]);

  return (
    <FormLayout
      title="DataSource"
      useUpdateMutation={useUpdateDataSourceMutation}
      type="update"
      FormInputs={DataSourceInputs<UpdateDataSourceDto>}
      form={form}
      id={id}
    />
  );
}
