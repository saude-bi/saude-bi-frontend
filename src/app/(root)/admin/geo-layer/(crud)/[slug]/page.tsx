'use client';

import React, { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useParams } from 'next/navigation';
import { FormLayout } from '@/components/Common/Layout/FormLayout';
import { GeoLayerInputs } from '@/components/Forms/geo-layer';
import { useFindGeoLayerQuery, useRemoveGeoLayerMutation } from '@/store/geo-layer';
import { UpdateGeoLayerDto } from '@/types/geo-layer';

export default function GeoLayer() {
  const { slug } = useParams();
  const id = parseInt(slug as string, 10);
  const { data, isSuccess } = useFindGeoLayerQuery(slug ? id : skipToken);

  const form = useForm<UpdateGeoLayerDto>({});

  useEffect(() => {
    if (isSuccess) {
      form.setValues({ name: data.name, params: data.params, source: data.source.id, establishmentPropertyName: data.establishmentPropertyName });
    }
  }, [isSuccess]);

  return (
    <FormLayout
      title="Camadas Geograficas"
      useRemoveMutation={useRemoveGeoLayerMutation}
      FormInputs={GeoLayerInputs<UpdateGeoLayerDto>}
      form={form}
      type="preview"
      id={id}
    />
  );
}
