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
    </Box>
  );
};
