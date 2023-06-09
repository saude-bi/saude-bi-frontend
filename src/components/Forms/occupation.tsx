import { Box, TextInput } from '@mantine/core';
import { z } from 'zod';
import { GenericForm } from '../Common/Layout/FormLayout';
import { Autocomplete } from '@mantine/core';
import {useFindAllOccupationCategoriesQuery} from "@/store/occupation-categories"
import { OccupationCategory } from '@/types/occupation-category';
export const OccupationSchema = z.object({
    name: z
    .string({
        required_error: "Campo nome da ocupação é obrigatorio"
    })
    .min(4, {message: "O nome da ocupação é muito curto"}),
    cbo: z
    .string({
        required_error: "O campo cbo é obrigatorio"
    }),
    category: z.number({
        required_error: "A Categoria da ocupação é obrigatoria"
    })
})

type Props<T> = {
    disabled: boolean;
    form: GenericForm<T>;
};

export const OccupationInputs =  <T,>({ disabled = false, form }: Props<T>) => {
    
    const {data} = useFindAllOccupationCategoriesQuery(
        { page: 0, perPage: 1000 },
        { pollingInterval: 1000 }
    )

    const occupationCategoriesList = data?.data.map(item => ({
        value: item.name,
        id: item.id,
        name: item.name,
        created: item.created,
        updated: item.updated
    })) || []


    

    return (
        <Box>
            <TextInput
                withAsterisk
                label="Nome"
                placeholder="Nome da Ocupaçào"
                {...form.getInputProps('name')}
                disabled={disabled}
            />
            <TextInput
                withAsterisk
                label="CBO"
                placeholder="CBO"
                {...form.getInputProps('cbo')}
                disabled={disabled}
            />
            <Autocomplete
                withAsterisk
                label="Categoria da Ocupação"
                placeholder="Categoria da Ocupação"
                {...form.getInputProps('category')}
                data={occupationCategoriesList}
                disabled={disabled}
            />
        </Box>
    )
}