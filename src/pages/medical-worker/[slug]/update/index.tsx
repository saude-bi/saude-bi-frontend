import { FormLayout } from '@/components/Common/Layout/FormLayout';
import React, { useEffect } from 'react';
import { useForm, zodResolver } from '@mantine/form';
import { useRouter } from 'next/router';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { UpdateMedicalWorkerDto } from '@/types/medical-worker';
import { useFindMedicalWorkerQuery, useUpdateMedicalWorkerMutation } from '@/store/medical-worker';
import { MedicalWorkerInputs, MedicalWorkerSchema } from '@/components/Forms/medical-worker';

export default function DashboardCategoriesPage() {
  const router = useRouter();
  const { slug } = router.query;
  const id = parseInt(slug as string, 10);

  const { data, isSuccess, isError, isLoading } = useFindMedicalWorkerQuery(
    !!slug ? id : skipToken
  );

  const form = useForm<UpdateMedicalWorkerDto>({
    initialValues: {
      user: '',
      name: '',
      gender: '',
      cns: '',
      cpf: '',
    },
    validate: zodResolver(MedicalWorkerSchema),
    validateInputOnChange: true,
  });

  useEffect(() => {
    if (isSuccess) {
      form.setValues({
        // TODO: Fix username not being found on query
        user: data.user.username,
        name: data.name,
        gender: data.gender,
        cns: data.cns,
        cpf: data.cpf,
      });
    }
  }, [isSuccess]);

  return (
    <FormLayout
      title="Profissinal de Saúde"
      useUpdateMutation={useUpdateMedicalWorkerMutation}
      type="update"
      FormInputs={MedicalWorkerInputs<UpdateMedicalWorkerDto>}
      form={form}
      id={id}
    />
  );
}
