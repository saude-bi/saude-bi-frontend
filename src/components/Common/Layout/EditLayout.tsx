import { ButtonBack, ButtonDelete, ButtonEdit, ButtonSave } from '@/components/Common/Buttons/Buttons';
import { Grid, Stack, Text } from '@mantine/core';
import { CommonLayout } from '@/components/Common/Layout/CommonLayout';
import { ContentCard } from '../ContentCard/ContentCard';
import React, { MouseEventHandler } from 'react';
import { useRouter } from 'next/router';
import { Entity } from '@/types/common';
import { UseMutation } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { 
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  MutationDefinition,
} from '@reduxjs/toolkit/dist/query';

interface Props<T extends Entity> {
  children: React.ReactNode,
  useRemoveMutation: UseMutation<
    MutationDefinition<
      number,
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>,
      string,
      null
    >
  >;
  handleSubmit: MouseEventHandler<HTMLButtonElement>,
  id?: number,
  type: 'create' | 'edit' | 'view',
  title: string
}

export const EditLayout = <T extends Entity>({ 
  children,
  useRemoveMutation,
  handleSubmit,
  id,
  type = 'view',
  title 
}: Props<T>) => {
  const router = useRouter();
  const [remove] = useRemoveMutation();

  const handleDelete = () => {
    if (id) {
      remove(id);
    }
  }

  const handleBack = () => {
    router.back();
  }
  
  return (
    <CommonLayout title={title}>
        <Grid>
            <Grid.Col span={3}>
                <ContentCard>
                    <Stack>
                        <Text color="dark.3">
                            Ações
                        </Text>
                        {(type === 'create' || type === 'edit') ? (
                          <ButtonSave onClick={handleSubmit} />
                        ) :
                        type === 'view' ? (
                          <>
                            <ButtonEdit onClick={handleSubmit} />
                            <ButtonDelete onClick={handleDelete} />
                          </>
                        ) : null}
                        <ButtonBack onClick={handleBack} />
                    </Stack>
                </ContentCard>
            </Grid.Col>
            <Grid.Col span={9}>
                <ContentCard>
                    {children}
                </ContentCard>
            </Grid.Col>
        </Grid>
    </CommonLayout>
  );
};