import { Box, Select, TextInput } from '@mantine/core';
import { z } from 'zod';
import { useDebouncedState } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { GenericForm } from '@/components/Common/Layout/FormLayout';
import { useFindAllDashboardCategoriesQuery } from '@/store/dashboard-categories';

export const GeoDataSourceSchema = z.object({
    name: z
    .string({
      required_error: 'Campo Nome e Obrigatorio',
    })
    .nonempty({
      message: 'Campo Nome é obrigatório',
    }),
  url: z
    .string({
      required_error: 'Campo Url e Obrigatorio',
    })
    .url({
      message: 'Campo URL precisa ser valido',
    }),
  secret: z
    .string({
      required_error: 'Campo Codigo e Obrigatorio',
    })
    .nonempty({
      message: 'Campo Codigo é obrigatório',
    }),
});

type Props<T> = {
  disabled: boolean;
  form: GenericForm<T>;
};

export const GeoDataSourceInputs = <T,>({ disabled = false, form }: Props<T>) => {
  const [search, setSearch] = useState('');
  const [currentSearch, setCurrentSearch] = useDebouncedState(search, 250);

  useEffect(() => {
    setCurrentSearch(search);
  }, [search]);

  const { data } = useFindAllDashboardCategoriesQuery(
    { page: 0, perPage: 1000, name: currentSearch },
    { pollingInterval: 30000 }
  );

  const dashboardCategoriesList =
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
      label="URL"
      placeholder="URL"
      {...form.getInputProps('sourceUrl')}
      disabled={disabled}
    />
    <Select
      withAsterisk
      label="Categoria"
      placeholder="Categoria"
      {...form.getInputProps('category')}
      data={dashboardCategoriesList}
      disabled={disabled}
      searchable
      searchValue={search}
      onSearchChange={setSearch}
    />
    <TextInput
      withAsterisk
      label="Login"
      placeholder="Login"
      {...form.getInputProps('credentials.username')}
      disabled={disabled}
    />
    <TextInput
      withAsterisk
      label="Senha"
      placeholder="Senha"
      {...form.getInputProps('credentials.password')}
      disabled={disabled}
    />
  </Box>
  );
};
