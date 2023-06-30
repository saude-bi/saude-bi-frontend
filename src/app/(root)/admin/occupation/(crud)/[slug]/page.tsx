'use client';

import { FormLayout } from '@/components/Common/Layout/FormLayout';
import React, { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { useFindOccupationQuery, useRemoveOccupationMutation } from '@/store/occupations';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { OccupationInputs } from '@/components/Forms/occupation';
import { UpdateOccupationDto } from '@/types/occupations';
import { useParams } from 'next/navigation';

export default function Occupations() {
  const { slug } = useParams();
  const id = parseInt(slug as string, 10);
  const { data, isSuccess, isError, isLoading } = useFindOccupationQuery(!!slug ? id : skipToken);

  const form = useForm<UpdateOccupationDto>({});

  useEffect(() => {
    if (isSuccess) {
      console.log(data);
      form.setValues({ ...data, category: data.category.id.toString() });
    }
  }, [isSuccess]);

  return (
    <FormLayout
      title="Ocupação"
      useRemoveMutation={useRemoveOccupationMutation}
      type="preview"
      FormInputs={OccupationInputs<UpdateOccupationDto>}
      form={form}
      id={id}
    />
  );
}
