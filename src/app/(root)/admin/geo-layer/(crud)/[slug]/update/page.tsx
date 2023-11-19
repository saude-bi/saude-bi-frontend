'use client';

import { useForm } from '@mantine/form';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { FormLayout } from '@/components/Common/Layout/FormLayout';
import { GeoLayerInputs } from '@/components/Forms/geo-layer';
import { useFindGeoLayerQuery, useUpdateGeoLayerMutation } from '@/store/geo-layer';
import { UpdateGeoLayerDto } from '@/types/geo-layer';

export default function GeoLayerPage() {
    const { slug } = useParams();
    const id = parseInt(slug as string, 10);
    const { data, isSuccess } = useFindGeoLayerQuery(slug ? id : skipToken);

    const form = useForm<UpdateGeoLayerDto>({});

    useEffect(() => {
        if (isSuccess) {
            form.setValues({ name: data.name, params: data.params, source: data.source.id });
        }
    });

    return (
        <FormLayout
          title="Camadas Geograficas"
          useUpdateMutation={useUpdateGeoLayerMutation}
          type="update"
          FormInputs={GeoLayerInputs<UpdateGeoLayerDto>}
          form={form}
          id={id}
        />
    );
}
