import { Box, MultiSelect, TextInput, Select } from '@mantine/core';
import { z } from 'zod';
import { useDebouncedState } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { GenericForm } from '../Common/Layout/FormLayout';
import { useFindAllDataSourceQuery } from '@/store/data-source';
import { useFindAllDashboardCategoriesQuery } from '@/store/dashboard-categories';
import { useFindAllEstablishmentsQuery } from '@/store/establishments';

export const DashboardSchema = z.object({});

type Props<T> = {
  disabled: boolean;
  form: GenericForm<T>;
};

export const DashboardInputs = <T,>({ disabled = false, form }: Props<T>) => {
  const [searchEstablishment, setSearchEstablishment] = useState('');
  const [searchDataSource, setSearchDataSource] = useState('');
  const [searchDashboardCategory, setSearchDashboardCategory] = useState('');

  const [currentSearchEstablishment, setCurrentSearchEstablishment] = useDebouncedState(
    searchEstablishment,
    250
  );
  const [currentSearchDataSource, setCurrentSearchDataSource] = useDebouncedState(
    searchDataSource,
    250
  );
  const [currentSearchDashboardCategory, setCurrentSearchDashboardCategory] = useDebouncedState(
    searchDashboardCategory,
    250
  );

  useEffect(() => {
    setCurrentSearchEstablishment(searchEstablishment);
  }, [searchEstablishment]);

  useEffect(() => {
    setCurrentSearchDataSource(searchDataSource);
  }, [searchDataSource]);

  useEffect(() => {
    setCurrentSearchDashboardCategory(searchDashboardCategory);
  }, [searchDashboardCategory]);

  const { data: dataEstablishment } = useFindAllEstablishmentsQuery(
    { page: 0, perPage: 1000, name: currentSearchEstablishment },
    { pollingInterval: 30000 }
  );

  const { data: dataDataSource } = useFindAllDataSourceQuery(
    {
      page: 0,
      perPage: 1000,
      name: currentSearchDataSource,
    },
    { pollingInterval: 30000 }
  );

  const { data: dataDashboardCategory } = useFindAllDashboardCategoriesQuery(
    {
      page: 0,
      perPage: 1000,
      name: currentSearchDashboardCategory,
    },
    { pollingInterval: 30000 }
  );

  const establishmentList =
    dataEstablishment?.data.map((item) => ({
      value: item.id.toString(),
      label: item.name,
    })) || [];

  const dataSourceList =
    dataDataSource?.data.map((item) => ({
      value: item.id.toString(),
      label: item.name,
    })) || [];

  const dashboardCategoryList =
    dataDashboardCategory?.data.map((item) => ({
      value: item.id.toString(),
      label: item.name,
    })) || [];

  return (
    <Box>
      <MultiSelect
        withAsterisk
        label="Estabelecimento com Acesso"
        placeholder="Estabelecimento com Acesso"
        {...form.getInputProps('establishmentsWithAccess')}
        data={establishmentList}
        disabled={disabled}
        searchable
        searchValue={searchEstablishment}
        onSearchChange={setSearchEstablishment}
      />
      <Select
        withAsterisk
        label="Fonte de Dados"
        placeholder="Fonte de Dados"
        {...form.getInputProps('dataSource')}
        data={dataSourceList}
        disabled={disabled}
        searchable
        searchValue={searchDataSource}
        onSearchChange={setSearchDataSource}
      />
      <Select
        withAsterisk
        label="Categoria de Dashboard"
        placeholder="Categoria de Dashboard"
        {...form.getInputProps('category')}
        data={dashboardCategoryList}
        disabled={disabled}
        searchable
        searchValue={searchDashboardCategory}
        onSearchChange={setSearchDashboardCategory}
      />
      <TextInput
        withAsterisk
        label="Identificador do Metabase"
        placeholder="Identificador do Metabase"
        {...form.getInputProps('metabaseId')}
        disabled={disabled}
      />
      <TextInput
        withAsterisk
        label="Nome do Dashboard"
        placeholder="Nome do Dashboard"
        {...form.getInputProps('name')}
        disabled={disabled}
      />
      <TextInput
        label="Parametro"
        placeholder="Parametro"
        {...form.getInputProps('establishmentPropertyName')}
        disabled={disabled}
      />
    </Box>
  );
};
