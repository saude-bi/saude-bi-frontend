'use client';

import { ButtonSave } from '@/components/Common/Buttons/Buttons';
import React, { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { getPreviousPage } from '@/utils/routes';
import {notifications} from "@mantine/notifications";
import { PropsUpdateAction, Props } from './FormProps';

export const UpdateAction = <T,>({ id, form, useUpdateMutation }: PropsUpdateAction<T>) => {
    const router = useRouter();
    const pathname = usePathname();
    const [update, { isSuccess, isError, data }] = useUpdateMutation();
  
    const onSave = () => {
      if (!form.validate().hasErrors) {
        update({ id, body: form.values });
      }
    };
  
    useEffect(() => {
      if (isSuccess) {
        const previousPath = getPreviousPage(pathname);
        // HACK: Refresh the page to update the data, because nexjs BUG
        // more info https://github.com/vercel/next.js/issues/49300
        router.refresh();
        router.replace(previousPath, {
          pathname: previousPath,
          shalow: false,
          query: {
            title: 'Item atualizado com sucesso',
            message: 'O item foi atualizado.',
            type: 'success',
          },
        });
      }
    }, [isSuccess]);
    useEffect(() => {
      if (isError) {
        notifications.show({message: "Falha ao Salvar, Verifique os Campos"});
      }
    }, [isError]);
    return <ButtonSave onClick={onSave} />;
  };