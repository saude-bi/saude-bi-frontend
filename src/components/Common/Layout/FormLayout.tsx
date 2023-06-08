import { ButtonBack, ButtonDelete, ButtonEdit, ButtonSave } from '@/components/Common/Buttons/Buttons';
import { Grid, Stack, Text } from '@mantine/core';
import { CommonLayout } from '@/components/Common/Layout/CommonLayout';
import { ContentCard } from '../ContentCard/ContentCard';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { UseMutation } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { 
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  MutationDefinition,
} from '@reduxjs/toolkit/dist/query';
import { UseForm } from '@mantine/form/lib/types';
import { DashboardCategory } from '@/types/dashboard-category';

type Props<T> = {
  children: React.ReactNode,
  title: string,
  form: ReturnType<UseForm<T>>,
  FormInputs: React.FC<{ disabled: boolean, form: ReturnType<UseForm<T>> }>
} & (PropsPreviewActions & { type: 'preview' } | PropsSaveAction<T> & { type: 'create'  } | PropsUpdateAction<T> & { type: 'update' })

export const FormLayout = <T,>({ 
  children,
  title,
  form,
  FormInputs,
  ...props
}: Props<T>) => {
  const router = useRouter();

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
                        {props.type === 'create' &&
                          <CreateAction 
                            form={form} 
                            useSaveMutation={props.useSaveMutation}
                          />
                        }
                        {props.type === 'update' &&
                          <UpdateAction
                            id={props.id} 
                            form={form} 
                            useSaveMutation={props.useSaveMutation}
                          />
                        }
                        {props.type === 'preview' &&
                          <PreviewAction {...props} />
                        }
                        <ButtonBack onClick={handleBack} />
                    </Stack>
                </ContentCard>
            </Grid.Col>
            <Grid.Col span={9}>
                <ContentCard>
                  <form onSubmit={form.onSubmit(() => {})}>
                    <FormInputs disabled={props.type === 'preview'} form={form} ></FormInputs>
                  </form>
                </ContentCard>
            </Grid.Col>
        </Grid>
    </CommonLayout>
  );
};

type PropsPreviewActions = {
  updateUrl: string,
  id: number,
  useRemoveMutation: UseMutation<
    MutationDefinition<
      number,
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>,
      string,
      null
    >
  >
};

const PreviewAction = ({
  updateUrl,
  id,
  useRemoveMutation
}: PropsPreviewActions) => {
  const router = useRouter();
  const [remove, { isSuccess }] = useRemoveMutation();

  const onDelete = () => {
    remove(id)
  };

  useEffect(() => {
    if (isSuccess) {
      router.back();
    }
  }, [isSuccess]);

  return (
    <>
      <ButtonEdit href={`${updateUrl}/${id}`} />
      <ButtonDelete onClick={onDelete} />
    </>
  );
}

interface PropsSaveAction<T> {
  form: ReturnType<UseForm<T>>,
  useSaveMutation: UseMutation<
    MutationDefinition<
      T,
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, 
      string,
      unknown
    >
  >
}

const CreateAction = <T,>({
  form,
  useSaveMutation
}: PropsSaveAction<T>) => {
  const router = useRouter();
  const [save, { isSuccess }] = useSaveMutation();

  const onSave = () => {
    if (form.validate().hasErrors) {
      save(form.values)
    } 
  }

  useEffect(() => {
    if (isSuccess) {
      router.back();
    }
  }, [isSuccess])

  return (
    <ButtonSave onClick={onSave} />
  );
}

interface PropsUpdateAction<T> {
  id: number,
  form: ReturnType<UseForm<T>>,
  useSaveMutation: UseMutation<
    MutationDefinition<
      { id: number, body: T },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, 
      string,
      unknown
    >
  >
}

const UpdateAction = <T,>({
  id,
  form,
  useSaveMutation
}: PropsUpdateAction<T>) => {
  const router = useRouter();
  const [update, { isSuccess }] = useSaveMutation();

  const onSave = () => {
    if (form.validate().hasErrors) {
      update({ id, body: form.values })
    } 
  }

  useEffect(() => {
    if (isSuccess) {
      router.back();
    }
  }, [isSuccess])

  return (
    <ButtonSave onClick={onSave} />
  );
}