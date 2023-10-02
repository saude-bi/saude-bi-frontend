import React from 'react';
import { Grid } from '@mantine/core';
import { ContentCard } from '../ContentCard/ContentCard';

import { UseForm } from '@mantine/form/lib/types';
export type GenericForm<T> = ReturnType<UseForm<T>>;

interface FormContentProps<T> {
  form: GenericForm<T>;
  type: string;
  FormInputs: React.FC<{ disabled: boolean; form: GenericForm<T> }>;
}

export const FormContent = <T,>({ form, type, FormInputs }: FormContentProps<T>) => {
  return (
    <Grid.Col span={9}>
      <ContentCard>
        <form onSubmit={form.onSubmit(() => { })}>
          <FormInputs disabled={type === 'preview'} form={form} />
        </form>
      </ContentCard>
    </Grid.Col>
  );
};
