'use client';

import React, { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useParams } from 'next/navigation';
import { FormLayout } from '@/components/Common/Layout/FormLayout';
import { useFindMedicalWorkerQuery, useRemoveMedicalWorkerMutation } from '@/store/medical-worker';
import { UpdateMedicalWorkerDto } from '@/types/medical-worker';
import { MedicalWorkerUpdateInputs } from '@/components/Forms/medical-worker-update';

export default function DashboardCategoriesPage() {
  const { slug } = useParams();
  const id = parseInt(slug as string, 10);

  const { data, isSuccess } = useFindMedicalWorkerQuery(slug ? id : skipToken);

  const form = useForm<UpdateMedicalWorkerDto>({});

  useEffect(() => {
    if (isSuccess) {
      form.setValues({
        // TODO: Fix username not being found on query
        user: {
          username: data.user.username,
          hasAccess: data.user.username?.length > 0,
        },
        name: data.name,
        gender: data.gender,
        cns: data.cns,
        cpf: data.cpf,
        workRelations: data.workRelations,
      });
    }
  }, [data, isSuccess]);

  return (
    <>
      <FormLayout
        title="Profissional de Saúde"
        useRemoveMutation={useRemoveMedicalWorkerMutation}
        type="preview"
        FormInputs={MedicalWorkerUpdateInputs<UpdateMedicalWorkerDto>}
        form={form}
        id={id}
      />
    </>
  );
}
