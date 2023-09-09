'use client';

import { FormUpdate } from '@/components/Common/Layout/FormUpdate';
import React, { useEffect } from 'react';
import { UpdateOccupationDto } from '@/types/occupations';
import { useForm } from '@mantine/form';
import {  OccupationInputs } from '@/components/Forms/occupation';
import { useUpdateOccupationMutation, useFindOccupationQuery } from '@/store/occupations';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useParams } from 'next/navigation';

export default function OccupationsPage() {
  const { slug } = useParams();
  const id = parseInt(slug as string, 10);
  const { data, isSuccess, isError, isLoading } = useFindOccupationQuery(!!slug ? id : skipToken);

  const form = useForm<UpdateOccupationDto>({});

  useEffect(() => {
    if (isSuccess) {
      form.setValues({ name: data.name, cbo: data.cbo, category: data.category.id.toString() });
    }
  }, [isSuccess]);

  return (
    <FormUpdate
      title="Operações"
      useUpdateMutation={useUpdateOccupationMutation}
      type="update"
      FormInputs={OccupationInputs<UpdateOccupationDto>}
      form={form}
      id={id}
    />
  );
}
