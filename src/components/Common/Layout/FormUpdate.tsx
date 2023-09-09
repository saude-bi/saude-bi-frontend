'use client';

import { Button, Grid, Stack, Text } from '@mantine/core';
import { ContentCard } from '../ContentCard/ContentCard';
import React, { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { IconEye, IconList } from '@tabler/icons-react';
import { Props } from './FormProps';
import { UpdateAction } from './UpdateAction';
  
export const FormUpdate = <T,>({ title, form, FormInputs, extraButtons, ...props }: Props<T>) => {
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
            
              {props.type === 'update' && (
                <UpdateAction id={props.id} form={form} useUpdateMutation={props.useUpdateMutation} />
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