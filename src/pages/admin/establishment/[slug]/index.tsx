import { useRouter } from 'next/router';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useForm } from '@mantine/form';
import { useEffect } from 'react';
import { UpdateEstablishmentDto } from '@/types/establishment';
import { useFindEstablishmentQuery, useRemoveEstablishmentMutation } from '@/store/establishments';
import { FormLayout } from '@/components/Common/Layout/FormLayout';
import { EstablishmentInputs } from '@/components/Forms/establishment';

export default function EstablishmentPage() {
  const router = useRouter();
  const { slug } = router.query;
  const id = parseInt(slug as string, 10);

  const { data, isSuccess, isError, isLoading } = useFindEstablishmentQuery(slug ? id : skipToken);

  const form = useForm<UpdateEstablishmentDto>({});

  useEffect(() => {
    if (isSuccess) {
      form.setValues(data);
    }
  }, [isSuccess]);

  return (
    <FormLayout
      title="Dashboard de Estabelecimentos"
      useRemoveMutation={useRemoveEstablishmentMutation}
      type="preview"
      FormInputs={EstablishmentInputs<UpdateEstablishmentDto>}
      form={form}
      id={id}
    />
  );
}