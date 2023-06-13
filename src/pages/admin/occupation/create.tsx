import { FormLayout } from '@/components/Common/Layout/FormLayout';
import React from 'react';
import { useForm, zodResolver } from '@mantine/form';
import { useRouter } from 'next/router';

import { CreateOccupationDto } from '@/types/occupations';
import { OccupationInputs, OccupationSchema } from '@/components/Forms/occupation';
import { useCreateOccupationMutation } from '@/store/occupations';

export default function Occupations() {
  const router = useRouter();

  const form = useForm<CreateOccupationDto>({
    initialValues: {
      name: '',
      cbo: '',
      category: '',
    },
    validate: zodResolver(OccupationSchema),
    validateInputOnChange: true,
  });

  return (
    <FormLayout
      title="Ocupações"
      useCreateMutation={useCreateOccupationMutation}
      FormInputs={OccupationInputs<CreateOccupationDto>}
      form={form}
      type="create"
    />
  );
}
