import { Box, Select, TextInput } from "@mantine/core";
import { z } from "zod";
import { useDebouncedState } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { GenericForm } from "@/components/Common/Layout/FormLayout";
import { useFindAllDashboardCategoriesQuery } from "@/store/dashboard-categories";

export const GeoMapsSchema = z.object({});

type Props<T> = {
    disabled: boolean;
    form: GenericForm<T>;
};

export const GeoMapsInputs = <T,>({disabled = false, form}: Props<T>) => {
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
    </Box>
  );
};