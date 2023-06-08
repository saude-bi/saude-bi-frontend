import {
  ButtonBack,
  ButtonDelete,
  ButtonEdit,
  ButtonSave,
} from '@/components/Common/Buttons/Buttons';
import { Grid, Stack, Text } from '@mantine/core';
import { CommonLayout } from '@/components/Common/Layout/CommonLayout';
import { ContentCard } from '../ContentCard/ContentCard';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { UseForm } from '@mantine/form/lib/types';
import {
  GenericCreateMutation,
  GenericRemoveMutation,
  GenericUpdateMutation,
} from '@/store/common';
import { getUpdatePath, routePushToPreviousPage } from '@/utils/routes';

export type GenericForm<T> = ReturnType<UseForm<T>>;

type Props<T> = {
  title: string;
  form: GenericForm<T>;
  FormInputs: React.FC<{ disabled: boolean; form: GenericForm<T> }>;
} & (
  | (PropsPreviewActions & { type: 'preview' })
  | (PropsCreateAction<T> & { type: 'create' })
  | (PropsUpdateAction<T> & { type: 'update' })
);

export const FormLayout = <T,>({ title, form, FormInputs, ...props }: Props<T>) => {
  const router = useRouter();
  const handleBack = () => routePushToPreviousPage(router);

  return (
    <CommonLayout title={title}>
      <Grid>
        <Grid.Col span={3}>
          <ContentCard>
            <Stack>
              <Text color="dark.3">Ações</Text>
              {props.type === 'create' && (
                <CreateAction form={form} useCreateMutation={props.useCreateMutation} />
              )}
              {props.type === 'update' && (
                <UpdateAction
                  id={props.id}
                  form={form}
                  useUpdateMutation={props.useUpdateMutation}
                />
              )}
              {props.type === 'preview' && <PreviewAction {...props} />}
              <ButtonBack onClick={handleBack} />
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
    </CommonLayout>
  );
};

type PropsPreviewActions = {
  id: number;
  useRemoveMutation: GenericRemoveMutation;
};

const PreviewAction = ({ id, useRemoveMutation }: PropsPreviewActions) => {
  const router = useRouter();
  const [remove, { isSuccess }] = useRemoveMutation();
  const onDelete = () => remove(id);

  useEffect(() => {
    if (isSuccess) {
      routePushToPreviousPage(router);
    }
  }, [isSuccess]);

  return (
    <>
      <ButtonEdit href={getUpdatePath(router.asPath)} />
      <ButtonDelete onDelete={onDelete} />
    </>
  );
};

interface PropsCreateAction<T> {
  form: GenericForm<T>;
  useCreateMutation: GenericCreateMutation<any, T>;
}

const CreateAction = <T,>({ form, useCreateMutation }: PropsCreateAction<T>) => {
  const router = useRouter();
  const [save, { isSuccess }] = useCreateMutation();

  const onSave = () => {
    if (!form.validate().hasErrors) {
      save(form.values);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      routePushToPreviousPage(router);
    }
  }, [isSuccess]);

  return <ButtonSave onClick={onSave} />;
};

interface PropsUpdateAction<T> {
  id: number;
  form: GenericForm<T>;
  useUpdateMutation: GenericUpdateMutation<any, T>;
}

const UpdateAction = <T,>({ id, form, useUpdateMutation }: PropsUpdateAction<T>) => {
  const router = useRouter();
  const [update, { isSuccess }] = useUpdateMutation();

  const onSave = () => {
    if (!form.validate().hasErrors) {
      update({ id, body: form.values });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      routePushToPreviousPage(router);
    }
  }, [isSuccess]);

  return <ButtonSave onClick={onSave} />;
};
