'use client';

import { FormLayout } from '@/components/Common/Layout/FormLayout';
import React, { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useFindMedicalWorkerQuery, useRemoveMedicalWorkerMutation } from '@/store/medical-worker';
import { UpdateMedicalWorkerDto } from '@/types/medical-worker';
import { MedicalWorkerUpdateInputs } from '@/components/Forms/medical-worker-update';
import Link from 'next/link';
import { Button, Drawer } from '@mantine/core';
import { IconUserPlus } from '@tabler/icons-react';
import { useParams } from 'next/navigation';
import { useDisclosure } from '@mantine/hooks';
import { WorkRelationInputs } from '@/components/Forms/work-relation';
import { WorkRelationDrawer } from '../_components/WorkRelationDrawer';

export default function DashboardCategoriesPage() {
  const { slug } = useParams();
  const id = parseInt(slug as string, 10);

  const { data, isSuccess, isError, isLoading } = useFindMedicalWorkerQuery(
    !!slug ? id : skipToken
  );

  const form = useForm<UpdateMedicalWorkerDto>({});

  useEffect(() => {
    if (isSuccess) {
      form.setValues({
        // TODO: Fix username not being found on query
        user: {
          username: data.user.username,
          hasAccess: data.user.username?.length > 0,
        },
        name: data.name,
        gender: data.gender,
        cns: data.cns,
        cpf: data.cpf,
        workRelations: data.workRelations,
      });
    }
  }, [isSuccess]);

  return (
    <>
      <FormLayout
        title="Profissional de Saúde"
        useRemoveMutation={useRemoveMedicalWorkerMutation}
        type="preview"
        FormInputs={MedicalWorkerUpdateInputs<UpdateMedicalWorkerDto>}
        extraButtons={
          <Button
            variant="filled"
            type="submit"
            color="blue.6"
            leftIcon={<IconUserPlus size="1rem" />}
            fullWidth
            onClick={() => open()}
          >
            Adicionar Ocupação
          </Button>
        }
        form={form}
        id={id}
      />
    </>
  );
}
