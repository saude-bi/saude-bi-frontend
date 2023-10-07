'use client';;
import { Grid, Text } from '@mantine/core';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { UseForm } from '@mantine/form/lib/types';

import { Props } from './FormProps';
import { PreviewAction } from './PreviewAction';
import { CommonLayoutForm } from "./CommonFormLayout"

export type GenericForm<T> = ReturnType<UseForm<T>>;

import { FormContent } from "./FormContent"

import { ButtonForm } from "./ButtonForm"
export const FormPreview = <T,>({ title, form, FormInputs, extraButtons, ...props }: Props<T>) => {
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname.split('/').slice(0, 4).join('/'));
  }, [pathname]);

  return (
    <Grid>
      <CommonLayoutForm>
        <Text color="dark.3">Ações</Text>
        {props.type === 'preview' && <PreviewAction {...props} />}
        {extraButtons}
        <ButtonForm buttonText='Listar' pathSliceEnd={3} />
      </CommonLayoutForm>
      <FormContent form={form} type={props.type} FormInputs={FormInputs} />
    </Grid>
  );
};
