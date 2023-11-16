import { Box, Select, TextInput } from "@mantine/core";
import { z } from "zod";
import { GenericForm } from "@/components/Common/Layout/FormLayout";

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

export const DataSourceInputs = <T,>({ disabled = false, form }: Props<T>) => (
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
      disabled={disabled}
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
