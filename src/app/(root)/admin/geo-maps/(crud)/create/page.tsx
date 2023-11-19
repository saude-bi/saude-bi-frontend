'use client';

import { useForm, zodResolver } from '@mantine/form';
import { FormLayout } from '@/components/Common/Layout/FormLayout';
import { GeoMapsInputs, GeoMapsSchema } from '@/components/Forms/geo-maps';
import { useCreateGeoMapsMutation } from '@/store/geo-maps';
import { CreateGeoMapsDto } from '@/types/geo-maps';

export default function GeoMaps() {
    const form = useForm<CreateGeoMapsDto>({
        initialValues: {
            name: '',
            category: '',
        },
        validate: zodResolver(GeoMapsSchema),
        validateInputOnChange: true,
    });

    return (
        <FormLayout
          title="Mapas Geograficos"
          useCreateMutation={useCreateGeoMapsMutation}
          FormInputs={GeoMapsInputs<CreateGeoMapsDto>}
          form={form}
          type="create"
        />
    );
}
