'use client';

import React, { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useParams } from 'next/navigation';
import { FormLayout } from '@/components/Common/Layout/FormLayout';
import { useFindDashboardQuery, useRemoveDashboardMutation } from '@/store/dashboards';
import { DashboardInputs } from '@/components/Forms/dashboard';
import { UpdateDashboardDto } from '@/types/dashboards';
import { Establishment } from '@/types/establishment';

export default function Dashboards() {
  const { slug } = useParams();
  const id = parseInt(slug as string, 10);
  const { data, isSuccess, isError, isLoading } = useFindDashboardQuery(slug ? id : skipToken);
  const form = useForm<UpdateDashboardDto>({});

  useEffect(() => {
    const establishmentsWithAccessListId = data?.establishmentsWithAccess.map(
      (establishment: Establishment) => establishment.id.toString()
    );

    if (isSuccess && establishmentsWithAccessListId) {
      console.log(data);
      form.setValues({
        establishmentsWithAccess: [...establishmentsWithAccessListId],
        dataSource: data.dataSource.id.toString(),
        category: data.category.id.toString(),
        establishmentPropertyName: data.establishmentPropertyName,
        metabaseId: data.metabaseId,
        name: data.name,
      });
    }
  }, [isSuccess]);

  return (
    <FormLayout
      title="Dashboard"
      useRemoveMutation={useRemoveDashboardMutation}
      type="preview"
      FormInputs={DashboardInputs<UpdateDashboardDto>}
      form={form}
      id={id}
    />
  );
}
