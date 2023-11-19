'use client';

import React from "react";
import { useForm, zodResolver } from "@mantine/form";
import { FormLayout } from "@/components/Common/Layout/FormLayout";
import { CreateGeoDataSourceDto } from "@/types/geo-data-source";
import { GeoDataSourceInputs, GeoDataSourceSchema } from "@/components/Forms/geo-data-source";
import { useCreateGeoDataSourceMutation } from "@/store/geo-data-source";


export default function GeoDataSourcePage() {
    const form = useForm<CreateGeoDataSourceDto>({
        initialValues: {
            name: '',
            sourceUrl: '',
            category: '',
            credentials: {
                username: '',
                password: '',
            }
        },
        validate: zodResolver(GeoDataSourceSchema),
        validateInputOnChange: true,
    });

    return (
        <FormLayout
            title="Fonte de Dados Geograficos"
            useCreateMutation={useCreateGeoDataSourceMutation}
            FormInputs={GeoDataSourceInputs<CreateGeoDataSourceDto>}
            form={form}
            type="create"
        />
    );
}