'use client';

import React from 'react';
import { useForm, zodResolver } from '@mantine/form';
import { FormLayout } from '@/components/Common/Layout/FormLayout';
import { CreateDashboardDto } from '@/types/dashboards';
import { DashboardInputs, DashboardSchema } from '@/components/Forms/dashboard';
import { useCreateDashboardMutation } from '@/store/dashboards';

export default function DashboardPage() {
  const form = useForm<CreateDashboardDto>({
    initialValues: {
      establishmentsWithAccess: [],
      dataSource: '',
      category: '',
      metabaseId: '',
      name: '',
      establishmentPropertyName: '',
    },
    validate: zodResolver(DashboardSchema),
    validateInputOnChange: true,
  });

  return (
    <FormLayout
      title="Dashboards"
      useCreateMutation={useCreateDashboardMutation}
      FormInputs={DashboardInputs<CreateDashboardDto>}
      form={form}
      type="create"
    />
  );
}
