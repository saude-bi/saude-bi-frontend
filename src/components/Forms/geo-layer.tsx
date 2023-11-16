import { z } from "zod";
import { GenericForm } from "../Common/Layout/FormLayout";
import { Box, TextInput } from "@mantine/core";

export const GeoLayerSchema = z.object({});

type Props<T> = {
    disabled: boolean;
    form: GenericForm<T>;
};

export const GeoLayerInputs = <T,>({ disabled = false, form}: Props<T>) => {
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
    </Box>
}