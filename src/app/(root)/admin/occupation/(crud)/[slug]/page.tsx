'use client';

import React, { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useParams } from 'next/navigation';
import { FormLayout } from '@/components/Common/Layout/FormLayout';
import { useFindOccupationQuery, useRemoveOccupationMutation } from '@/store/occupations';
import { OccupationInputs } from '@/components/Forms/occupation';
import { UpdateOccupationDto } from '@/types/occupations';

export default function Occupations() {
  const { slug } = useParams();
  const id = parseInt(slug as string, 10);
  const { data, isSuccess } = useFindOccupationQuery(slug ? id : skipToken);

  const form = useForm<UpdateOccupationDto>({});

  useEffect(() => {
    if (isSuccess) {
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
