'use client';

import React, { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useParams } from 'next/navigation';
import { UpdateOccupationCategoryDto } from '@/types/occupation-category';
import { FormLayout } from '@/components/Common/Layout/FormLayout';
import { useFindDirectorshipQuery, useRemoveDirectorshipMutation } from '@/store/directorship';
import { UpdateDirectorshipDto } from '@/types/directorship';
import { DirectorshipInputs } from '@/components/Forms/directorship';

export default function PreviewDirectorshipPage() {
  const { slug } = useParams();
  const id = parseInt(slug as string, 10);
  const { data, isSuccess, isError, isLoading } = useFindDirectorshipQuery(slug ? id : skipToken);

  const form = useForm<UpdateOccupationCategoryDto>({});

  useEffect(() => {
    if (isSuccess) {
      form.setValues(data);
    }
  }, [isSuccess]);

  return (
    <FormLayout
      title="Diretorias"
      useRemoveMutation={useRemoveDirectorshipMutation}
      type="preview"
      FormInputs={DirectorshipInputs<UpdateDirectorshipDto>}
      form={form}
      id={id}
    />
  );
}
