'use client';

import React from "react";
import { FormLayout } from "@/components/Common/Layout/FormLayout";
import { GeoLayerInputs, GeoLayerSchema } from "@/components/Forms/geo-layer";
import { useCreateGeoLayerMutation } from "@/store/geo-layer";
import { CreateGeoLayerDto } from "@/types/geo-layer";
import { useForm, zodResolver } from "@mantine/form";

export default function GeoLayerPage() {
    const form = useForm<CreateGeoLayerDto>({
        initialValues: {
            name: '',
            params: '',
            source: '',
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