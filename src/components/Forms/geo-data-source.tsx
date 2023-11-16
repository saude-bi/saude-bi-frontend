import { Box, Select, TextInput } from "@mantine/core";
import { z } from "zod";
import { useDebouncedState } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { GenericForm } from "@/components/Common/Layout/FormLayout";
import { useFindAllDashboardCategoriesQuery } from "@/store/dashboard-categories";

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

export const DataSourceInputs = <T,>({ disabled = false, form }: Props<T>) => {
  
  const [searchDashboardCategory, setSearchDashboardCategory] = useState('');
  
  const [currentSearchDashboardCategory, setCurrentSearchDashboardCategory] = useDebouncedState(
    searchDashboardCategory,
    250
  );

  useEffect(() => {
    setCurrentSearchDashboardCategory(searchDashboardCategory);
  }, [searchDashboardCategory]);

  const { data: dataDashboardCategory } = useFindAllDashboardCategoriesQuery(
    {
      page: 0,
      perPage: 1000,
      name: currentSearchDashboardCategory,
    },
    { pollingInterval: 30000 }
  );

  const dashboardCategoryList =
    dataDashboardCategory?.data.map((item) => ({
      value: item.id.toString(),
      label: item.name,
    })) || [];

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
        data={dashboardCategoryList}
        disabled={disabled}
        searchable
        searchValue={searchDashboardCategory}
        onSearchChange={setSearchDashboardCategory}
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
};
