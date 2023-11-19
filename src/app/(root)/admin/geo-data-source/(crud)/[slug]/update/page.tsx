'use client';

import { FormLayout } from "@/components/Common/Layout/FormLayout";
import { GeoDataSourceInputs, GeoDataSourceSchema } from "@/components/Forms/geo-data-source";
import { useFindGeoDataSourceQuery, useUpdateGeoDataSourceMutation } from "@/store/geo-data-source";
import { UpdateGeoDataSourceDto } from "@/types/geo-data-source";
import { useForm, zodResolver } from "@mantine/form";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function GoeDataSourcePage() {
    const { slug } = useParams();
    const id = parseInt(slug as string, 10);

    const { data, isSuccess } = useFindGeoDataSourceQuery(slug ? id : skipToken);

    const form = useForm<UpdateGeoDataSourceDto>({
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
            useUpdateMutation={useUpdateGeoDataSourceMutation}
            type="update"
            FormInputs={GeoDataSourceInputs<UpdateGeoDataSourceDto>}
            form={form}
            id={id}
        />
    );
}