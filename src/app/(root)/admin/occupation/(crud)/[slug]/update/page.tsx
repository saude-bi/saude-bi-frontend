'use client';

import React, { useEffect } from 'react';
import { useForm } from '@mantine/form';

import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useParams } from 'next/navigation';
import { useUpdateOccupationMutation, useFindOccupationQuery } from '@/store/occupations';
import { OccupationInputs } from '@/components/Forms/occupation';
import { UpdateOccupationDto } from '@/types/occupations';
import { FormLayout } from '@/components/Common/Layout/FormLayout';

export default function OccupationsPage() {
  const { slug } = useParams();
  const id = parseInt(slug as string, 10);
  const { data, isSuccess } = useFindOccupationQuery(slug ? id : skipToken);

  const form = useForm<UpdateOccupationDto>({});

  useEffect(() => {
    if (isSuccess) {
      form.setValues({ name: data.name, cbo: data.cbo, category: data.category.id.toString() });
    }
  }, [isSuccess]);

  return (
    <FormLayout
      title="Operações"
      useUpdateMutation={useUpdateOccupationMutation}
      type="update"
      FormInputs={OccupationInputs<UpdateOccupationDto>}
      form={form}
      id={id}
    />
  );
}
