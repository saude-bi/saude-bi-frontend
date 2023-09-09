'use client';

import { Button, Grid, Stack, Text } from '@mantine/core';
import { ContentCard } from '../ContentCard/ContentCard';
import React, { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import {  IconList } from '@tabler/icons-react';
import { Props } from './FormProps';
import { CreateAction } from './CreateAction';

export const FormCreate = <T,>({ title, form, FormInputs, extraButtons, ...props }: Props<T>) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname.split('/').slice(0, 4).join('/'));
  }, [pathname]);

  return (
    <Grid>
      <Grid.Col span={3}>
        <ContentCard>
          <Stack>
            <Text color="dark.3">Ações</Text>
            {props.type === 'create' && (
              <CreateAction form={form} useCreateMutation={props.useCreateMutation} />
            )}
           
            {extraButtons}
            <Button
              variant="outline"
              color="primary"
              leftIcon={<IconList size="1rem" />}
              onClick={() => router.push(pathname.split('/').slice(0, 3).join('/'))}
            >
              Listar
            </Button>
           
          </Stack>
        </ContentCard>
      </Grid.Col>
      <Grid.Col span={9}>
        <ContentCard>
          <form onSubmit={form.onSubmit(() => {})}>
            <FormInputs disabled={props.type === 'preview'} form={form} />
          </form>
        </ContentCard>
      </Grid.Col>
    </Grid>
  );
};