import { Box, Select, TextInput } from '@mantine/core';
import { z } from 'zod';
import { GenericForm } from '@/components/Common/Layout/FormLayout';
import { useEffect, useState } from 'react';
import { useDebouncedState } from '@mantine/hooks';
import { useFindAllDirectorshipsQuery } from '@/store/directorship';

export const EstablishmentSchema = z.object({
  name: z.string({
    required_error: 'Campo nome do estabelecimento é obrigatório',
  }),
  cnes: z.string({
    required_error: 'Campo cnes do estabelecimento é obrigatório',
  }),
});

type Props<T> = {
  disabled: boolean;
  form: GenericForm<T>;
};

export const EstablishmentInputs = <T,>({ disabled = false, form }: Props<T>) => {
  const [search, setSearch] = useState('');
  const [currentSearch, setCurrentSearch] = useDebouncedState(search, 250);

  useEffect(() => {
    setCurrentSearch(search);
  }, [search]);

  const { data } = useFindAllDirectorshipsQuery(
    { page: 0, perPage: 1000, name: currentSearch },
    { pollingInterval: 30000 }
  );

  const directorshipList =
    data?.data.map((item) => ({
      value: item.id.toString(),
      label: item.name,
    })) || [];

  return (
    <Box>
      <TextInput
        withAsterisk
        label="Nome"
        placeholder="Nome"
        {...form.getInputProps('name')}
        disabled={disabled}
      />

      <TextInput
        withAsterisk
        label="Cnes"
        placeholder="Cnes"
        {...form.getInputProps('cnes')}
        disabled={disabled}
      />

      <Select
        withAsterisk
        label="Diretoria"
        placeholder="Diretoria"
        {...form.getInputProps('directorship.id')}
        data={directorshipList}
        disabled={disabled}
        searchable
        searchValue={search}
        onSearchChange={setSearch}
      />
    </Box>
  );
};
