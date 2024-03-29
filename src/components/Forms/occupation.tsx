import { Box, TextInput, Select } from '@mantine/core';
import { z } from 'zod';
import { useDebouncedState } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { GenericForm } from '../Common/Layout/FormLayout';
import { useFindAllOccupationCategoriesQuery } from '@/store/occupation-categories';

export const OccupationSchema = z.object({
  name: z
    .string({
      required_error: 'Campo nome da ocupação é obrigatorio',
    })
    .min(4, { message: 'O nome da ocupação é muito curto' }),
  cbo: z.string({
    required_error: 'O campo cbo é obrigatorio',
  }),
  category: z.string({
    required_error: 'A Categoria da ocupação é obrigatoria',
  }),
});

type Props<T> = {
  disabled: boolean;
  form: GenericForm<T>;
};

export const OccupationInputs = <T,>({ disabled = false, form }: Props<T>) => {
  const [search, setSearch] = useState('');
  const [currentSearch, setCurrentSearch] = useDebouncedState(search, 250);

  useEffect(() => {
    setCurrentSearch(search);
  }, [search]);

  const { data } = useFindAllOccupationCategoriesQuery(
    { page: 0, perPage: 1000, name: currentSearch },
    { pollingInterval: 30000 }
  );

  const occupationCategoriesList =
    data?.data.map((item) => ({
      value: item.id.toString(),
      label: item.name,
    })) || [];

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
      <Select
        withAsterisk
        label="Categoria da Ocupação"
        placeholder="Categoria da Ocupação"
        {...form.getInputProps('category')}
        data={occupationCategoriesList}
        disabled={disabled}
        searchable
        searchValue={search}
        onSearchChange={setSearch}
      />
    </Box>
  );
};
