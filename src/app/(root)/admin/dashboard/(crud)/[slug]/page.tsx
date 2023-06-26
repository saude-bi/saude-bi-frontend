'use client';

import { FormLayout } from '@/components/Common/Layout/FormLayout';
import React, { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { useFindDashboardQuery, useRemoveDashboardMutation } from '@/store/dashboards';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { DashboardInputs } from '@/components/Forms/dashboard';
import { UpdateDashboardDto } from '@/types/dashboards';
import { useParams } from 'next/navigation';
import { map } from 'zod';
import { Establishment } from '@/types/establishment';
export default function Dashboards() {
    const { slug } = useParams();
    const id = parseInt(slug as string, 10);
    const {data, isSuccess, isError, isLoading } = useFindDashboardQuery(!!slug ? id : skipToken);
    const form = useForm<UpdateDashboardDto>({})

    useEffect(()=> {

        const establishmentsWithAccessListId = data?.establishmentsWithAccess.map((establishment: Establishment) => {
            return establishment.id
        })

        if (isSuccess && establishmentsWithAccessListId) {
            console.log(data)
            form.setValues({...data, establishmentsWithAccess: [...establishmentsWithAccessListId], dataSource: data.dataSource.id, category: data.category.id});
        }
    }, [isSuccess])

    return (
        <FormLayout
            title="Dashboard"
            useRemoveMutation={useRemoveDashboardMutation}
            type="preview"
            FormInputs={DashboardInputs<UpdateDashboardDto>}
            form={form}
            id={id}
        />
    )
}