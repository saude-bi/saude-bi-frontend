'use client';

import { Button, Grid, Stack, Text } from '@mantine/core';
import { ContentCard } from '../ContentCard/ContentCard';
import React, { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import {  IconList } from '@tabler/icons-react';
import { Props } from './FormProps';
import { CreateAction } from './CreateAction';
import { CommonLayoutForm } from "./CommonFormLayout"
import {FormContent} from "./FormContent"

import {ButtonForm} from "./ButtonForm"
export const FormCreate = <T,>({ title, form, FormInputs, extraButtons, ...props }: Props<T>) => {
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname.split('/').slice(0, 4).join('/'));
  }, [pathname]);

  return (
    <Grid>
      <CommonLayoutForm>
      <Text color="dark.3">Ações</Text>
            {props.type === 'create' && (
              <CreateAction form={form} useCreateMutation={props.useCreateMutation} />
            )}
            {extraButtons}
            <ButtonForm buttonText='Listar' pathSliceEnd={3}/>  
      </CommonLayoutForm>
      <FormContent form={form} type={props.type} FormInputs={FormInputs} />
    </Grid>
  );
};