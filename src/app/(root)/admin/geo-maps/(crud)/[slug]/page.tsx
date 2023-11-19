'use client';

import { useForm } from '@mantine/form';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { FormLayout } from '@/components/Common/Layout/FormLayout';
import { GeoMapsInputs } from '@/components/Forms/geo-maps';
import { useFindGeoMapsQuery, useRemoveGeoMapsMutation } from '@/store/geo-maps';
import { UpdateGeoMapsDto } from '@/types/geo-maps';

export default function GeoMapsPage() {
    const { slug } = useParams();
    const id = parseInt(slug as string, 10);

    const { data, isSuccess } = useFindGeoMapsQuery(slug ? id : skipToken);

    const form = useForm<UpdateGeoMapsDto>({});

    useEffect(() => {
        if (isSuccess) {
            form.setValues({
                name: data.name,
                category: data.category.toString(),
            });
        }
    }, [isSuccess]);

    return (
        <FormLayout
          title="Mapas Geograficos"
          useRemoveMutation={useRemoveGeoMapsMutation}
          type="preview"
          FormInputs={GeoMapsInputs<UpdateGeoMapsDto>}
          form={form}
          id={id}
        />
    );
}
