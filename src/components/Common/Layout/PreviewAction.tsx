'use client';

import { ButtonDelete, ButtonEdit } from '@/components/Common/Buttons/Buttons';
import React, { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { getPreviousPage, getUpdatePath } from '@/utils/routes';
import { PropsPreviewActions } from "./FormProps"

export const PreviewAction = ({ id, useRemoveMutation }: PropsPreviewActions) => {
  const router = useRouter();
  const pathname = usePathname();
  const [remove, { isSuccess }] = useRemoveMutation();
  const onDelete = () => remove(id);

  useEffect(() => {
    if (isSuccess) {
      const previousPath = getPreviousPage(pathname);
      router.push(previousPath, {
        pathname: previousPath,
        query: {
          title: 'Item deletado com sucesso',
          message: 'O item foi removido da base de dados.',
          type: 'success',
        },
      });
    }
  }, [isSuccess]);

  return (
    <>
      <ButtonEdit href={getUpdatePath(pathname)} />
      <ButtonDelete onDelete={onDelete} />
    </>
  );
};