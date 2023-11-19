'use client';

import React from 'react';
import { useForm, zodResolver } from '@mantine/form';
import { FormLayout } from '@/components/Common/Layout/FormLayout';
import { GeoLayerInputs, GeoLayerSchema } from '@/components/Forms/geo-layer';
import { useCreateGeoLayerMutation } from '@/store/geo-layer';
import { CreateGeoLayerDto } from '@/types/geo-layer';

export default function GeoLayerPage() {
  const form = useForm<CreateGeoLayerDto>({
    initialValues: {
      source: 0,
      params: '',
      name: '',
      establishmentPropertyName: '',
    },
    validate: zodResolver(GeoLayerSchema),
    validateInputOnChange: true,
  });

  return (
    <FormLayout
      title="Camadas Geograficas"
      useCreateMutation={useCreateGeoLayerMutation}
      FormInputs={GeoLayerInputs<CreateGeoLayerDto>}
      form={form}
      type="create"
    />
  );
}
