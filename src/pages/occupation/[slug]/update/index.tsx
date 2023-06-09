import { FormLayout } from '@/components/Common/Layout/FormLayout';
import React, { useEffect } from 'react';
import { UpdateOccupationDto } from "@/types/occupations";
import { useForm, zodResolver } from '@mantine/form';
import { OccupationSchema, OccupationInputs } from "@/components/Forms/occupation";
import 
{ 
    useUpdateOccupationMutation, 
    useFindOccupationQuery 
} from "@/store/occupations";

import { useRouter } from 'next/router';
import { skipToken } from '@reduxjs/toolkit/dist/query';

export default function OccupationsPage() {
    const router = useRouter();
    const { slug } = router.query;
    const id = parseInt(slug as string, 10);
    const { data, isSuccess, isError, isLoading } = useFindOccupationQuery(
        !!slug ? id : skipToken
    );

    const form = useForm<UpdateOccupationDto>({})

    useEffect(() => {
        if (isSuccess) {
          console.log(data);
          form.setValues({ name: data.name, cbo: data.cbo, category: data.category.id.toString()});
        }
    }, [isSuccess]);

    return (
        <FormLayout 
            title='Operações'
            useUpdateMutation={useUpdateOccupationMutation}
            type="update"
            FormInputs={OccupationInputs<UpdateOccupationDto>}
            form={form}
            id={id}
        />
    )
    
}