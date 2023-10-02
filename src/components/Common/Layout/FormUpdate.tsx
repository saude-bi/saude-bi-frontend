'use client';

import { Button, Grid, Text } from '@mantine/core';
import React, { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { IconEye, IconList } from '@tabler/icons-react';
import { Props } from './FormProps';
import { UpdateAction } from './UpdateAction';

import { CommonLayoutForm } from "./CommonFormLayout"
import { FormContent } from "./FormContent"
import { ButtonForm } from "./ButtonForm"

export const FormUpdate = <T,>({ title, form, FormInputs, extraButtons, ...props }: Props<T>) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname.split('/').slice(0, 4).join('/'));
  }, [pathname]);

  return (
    <Grid>
      <CommonLayoutForm>
        <Text color="dark.3">Ações</Text>
        {props.type === 'update' && (
          <UpdateAction id={props.id} form={form} useUpdateMutation={props.useUpdateMutation} />
        )}
        {extraButtons}
        <ButtonForm buttonText='Listar' pathSliceEnd={3} />
        {props.type === 'update' && (
          <Button
            variant="outline"
            color="primary"
            leftIcon={<IconEye size="1rem" />}
            onClick={() => router.push(pathname.split('/').slice(0, 4).join('/'))}
          >
            Visualizar
          </Button>
        )}
      </CommonLayoutForm>
      <FormContent form={form} type={props.type} FormInputs={FormInputs} />
    </Grid>
  );
};