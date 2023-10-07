'use client';

import { FormUpdate } from '@/components/Common/Layout/FormUpdate';
import React, { useEffect } from 'react';
import { useForm, zodResolver } from '@mantine/form';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { UpdateMedicalWorkerDto } from '@/types/medical-worker';
import { useFindMedicalWorkerQuery, useUpdateMedicalWorkerMutation } from '@/store/medical-worker';
import { MedicalWorkerInputs, MedicalWorkerSchema } from '@/components/Forms/medical-worker';
import { useParams } from 'next/navigation';
import { MedicalWorkerUpdateInputs } from '@/components/Forms/medical-worker-update';

export default function DashboardCategoriesPage() {
  const { slug } = useParams();
  const id = parseInt(slug as string, 10);

  const { data, isSuccess, isError, isLoading } = useFindMedicalWorkerQuery(
    !!slug ? id : skipToken
  );

  const form = useForm<UpdateMedicalWorkerDto>({
    initialValues: {
      user: {
        username: '',
      },
      name: '',
      gender: '',
      cns: '',
      cpf: '',
      workRelations: [],
    },
    validate: zodResolver(MedicalWorkerSchema),
    validateInputOnChange: true,
  });

  useEffect(() => {
    if (isSuccess) {
      form.setValues({
        // TODO: Fix username not being found on query
        user: {
          username: '',
        },
        name: data.name,
        gender: data.gender,
        cns: data.cns,
        cpf: data.cpf,
      });
    }
  }, [isSuccess]);

  return (
    <FormUpdate
      title="Profissinal de Saúde"
      useUpdateMutation={useUpdateMedicalWorkerMutation}
      type="update"
      FormInputs={MedicalWorkerUpdateInputs<UpdateMedicalWorkerDto>}
      form={form}
      id={id}
    />
  );
}
