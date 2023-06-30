import { Box, Stack, TextInput } from '@mantine/core';
import { z } from 'zod';
import { GenericForm } from '../Common/Layout/FormLayout';
import { Select } from '@mantine/core';
import { useDebouncedState } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { useFindAllOccupationsQuery } from '@/store/occupations';
import { useFindAllEstablishmentsQuery } from '@/store/establishments';
import { ButtonSave } from '../Common/Buttons/Buttons';

export const WorkRelationSchema = z.object({
  establishment: z.string({
    required_error: 'O campo estabelecimento é obrigatorio',
  }),
  occupation: z.string({
    required_error: 'O campo estabelecimento é obrigatorio',
  }),
});

type Props<T> = {
  disabled: boolean;
  form: GenericForm<T>;
  onSave: () => void;
};

export const WorkRelationInputs = <T,>({ disabled = false, form, onSave }: Props<T>) => {
  const [searchOcuppation, setSearchOcuppation] = useState('');
  const [currentSearchOccupation, setCurrentSearchOccupation] = useDebouncedState(
    searchOcuppation,
    250
  );

  const [searchEstablishment, setSearchEstablishment] = useState('');
  const [currentSearchEstablishment, setCurrentSearchEstablishment] = useDebouncedState(
    searchEstablishment,
    250
  );

  useEffect(() => {
    setCurrentSearchOccupation(searchOcuppation);
  }, [searchOcuppation]);

  useEffect(() => {
    setCurrentSearchEstablishment(searchEstablishment);
  }, [searchOcuppation]);

  const { data: dataOccupation } = useFindAllOccupationsQuery(
    { page: 0, perPage: 1000, name: currentSearchOccupation },
    { pollingInterval: 30000 }
  );

  const { data: dataEstablishment } = useFindAllEstablishmentsQuery(
    { page: 0, perPage: 1000, name: currentSearchEstablishment },
    { pollingInterval: 30000 }
  );

  const occupationList =
    dataOccupation?.data.map((item) => ({
      value: item.id.toString(),
      label: item.name,
    })) || [];

  const establishmentList =
    dataEstablishment?.data.map((item) => ({
      value: item.id.toString(),
      label: item.name,
    })) || [];

  return (
    <Stack>
      <Select
        withAsterisk
        label="Ocupação"
        placeholder="Ocupação"
        {...form.getInputProps('occupation')}
        data={occupationList}
        disabled={disabled}
        searchable
        searchValue={searchOcuppation}
        onSearchChange={setSearchOcuppation}
      />

      <Select
        withAsterisk
        label="Estabelecimento"
        placeholder="Estabelecimento"
        {...form.getInputProps('establishment')}
        data={establishmentList}
        disabled={disabled}
        searchable
        searchValue={searchEstablishment}
        onSearchChange={setSearchEstablishment}
      />

      <ButtonSave onClick={onSave}></ButtonSave>
    </Stack>
  );
};
