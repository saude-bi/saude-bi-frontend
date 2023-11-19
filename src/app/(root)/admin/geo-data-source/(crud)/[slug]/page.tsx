'use client'

import React, { useEffect } from "react";
import { useForm } from "@mantine/form";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { useParams } from "next/navigation"
import { FormLayout } from "@/components/Common/Layout/FormLayout";
import { useFindGeoDataSourceQuery, useRemoveGeoDataSourceMutation } from "@/store/geo-data-source";
import { GeoDataSourceInputs } from "@/components/Forms/geo-data-source";
import { UpdateGeoDataSourceDto } from "@/types/geo-data-source";

export default function GeoDataSourcePage() {
    const { slug } = useParams();
    const id = parseInt(slug as string, 10);

    const { data, isSuccess } = useFindGeoDataSourceQuery(slug ? id : skipToken);

    const form = useForm<UpdateGeoDataSourceDto>({});

    useEffect(() => {
        if(isSuccess) {
            form.setValues({
            name: data.name,
            sourceUrl: data.sourceUrl,
            category: data.category.id.toString(),
            credentials: {
                username: data.credentials.username,
                password: data.credentials.password,
            },
          });
        }
        
    }, [isSuccess]);

    return (
        <FormLayout
            title="Fonte de Dados Geograficos"
            useRemoveMutation={useRemoveGeoDataSourceMutation}
            type="preview"
            FormInputs={GeoDataSourceInputs<UpdateGeoDataSourceDto>}
            form={form}
            id={id}
        />
    );
}