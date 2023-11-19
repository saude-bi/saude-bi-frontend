import { z } from 'zod';
import { Box, Select, TextInput } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useDebouncedState } from '@mantine/hooks';
import { GenericForm } from '../Common/Layout/FormLayout';
import { useFindAllGeoDataSourceQuery } from '@/store/geo-data-source';

export const GeoLayerSchema = z.object({});

type Props<T> = {
    disabled: boolean;
    form: GenericForm<T>;
};

export const GeoLayerInputs = <T,>({ disabled = false, form }: Props<T>) => {
    const [search, setSearch] = useState('');
    const [currentSearch, setCurrentSearch] = useDebouncedState(search, 250);

    useEffect(() => {
      setCurrentSearch(search);
    }, [search]);

    const { data } = useFindAllGeoDataSourceQuery(
      { page: 0, perPage: 1000, name: currentSearch },
      { pollingInterval: 30000 }
    );

    const geoDataSourceList =
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
        label="Parametro"
        placeholder="Parametro"
        {...form.getInputProps('params')}
        disabled={disabled}
      />
      <Select
        withAsterisk
        label="Fonte"
        placeholder="Fonte"
        {...form.getInputProps('source')}
        data={geoDataSourceList}
        disabled={disabled}
        searchable
        searchValue={search}
        onSearchChange={setSearch}
      />
    </Box>
  );
};
