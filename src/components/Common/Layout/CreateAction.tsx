
import { ButtonSave } from '@/components/Common/Buttons/Buttons';
import React, { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { getPreviousPage } from '@/utils/routes';
import {notifications} from "@mantine/notifications";

import { PropsCreateAction } from './FormProps';

export const CreateAction = <T,>({ form, useCreateMutation }: PropsCreateAction<T>) => {
    const router = useRouter();
    const pathname = usePathname();
    const [save, { isSuccess, isError, data }] = useCreateMutation();
  
    const onSave = () => {
      if (!form.validate().hasErrors) {
        save(form.values);
      }
    };
  
    useEffect(() => {
      if (isSuccess) {
        const previousPath = getPreviousPage(pathname);
        router.push(previousPath, {
          pathname: previousPath,
          query: {
            title: 'Item cadastrado com sucesso',
            message: 'O item foi cadastrado na base de dados.',
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