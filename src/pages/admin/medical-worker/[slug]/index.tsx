import { FormLayout } from '@/components/Common/Layout/FormLayout';
import React, { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { useFindDashboardCategoryQuery } from '@/store/dashboard-categories';
import { useRouter } from 'next/router';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useFindMedicalWorkerQuery, useRemoveMedicalWorkerMutation } from '@/store/medical-worker';
import { UpdateMedicalWorkerDto } from '@/types/medical-worker';
import { MedicalWorkerInputs } from '@/components/Forms/medical-worker';

export default function DashboardCategoriesPage() {
  const router = useRouter();
  const { slug } = router.query;
  const id = parseInt(slug as string, 10);

  const { data, isSuccess, isError, isLoading } = useFindMedicalWorkerQuery(
    !!slug ? id : skipToken
  );

  const form = useForm<UpdateMedicalWorkerDto>({});

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
      title="Profissional de Saúde"
      useRemoveMutation={useRemoveMedicalWorkerMutation}
      type="preview"
      FormInputs={MedicalWorkerInputs<UpdateMedicalWorkerDto>}
      form={form}
      id={id}
    />
  );
}
